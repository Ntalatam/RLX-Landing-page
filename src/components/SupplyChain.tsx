import React, { useEffect, useRef, useState } from 'react';
import './SupplyChain.css';

interface SupplierNode {
  id: string;
  name: string;
  riskLevel: 'low' | 'medium' | 'high';
  status: 'verified' | 'pending' | 'alert';
  forecast?: 'normal' | 'warning' | 'critical'; // NEW: predictive analytics
}

interface SupplyChainAnimationProps {
  suppliers?: SupplierNode[];
  animationSpeed?: number;
  className?: string;
}

const roadPath =
  "M 40 220 L 140 80 L 240 220 L 340 80 L 440 220 L 540 80 L 640 220 L 740 80";
// Default suppliers with predictive analytics forecast
const defaultSuppliers: SupplierNode[] = [
  { id: '1', name: 'Raw Materials', riskLevel: 'medium', status: 'verified', forecast: 'normal' },
  { id: '2', name: 'Parts Supplier', riskLevel: 'high', status: 'verified', forecast: 'warning' },
  { id: '3', name: 'Manufacturing', riskLevel: 'medium', status: 'verified', forecast: 'normal' },
  { id: '4', name: 'Assembly', riskLevel: 'low', status: 'verified', forecast: 'normal' },
  { id: '5', name: 'Quality Check', riskLevel: 'low', status: 'verified', forecast: 'normal' },
  { id: '6', name: 'Packaging', riskLevel: 'medium', status: 'verified', forecast: 'warning' },
  { id: '7', name: 'Distribution', riskLevel: 'medium', status: 'pending', forecast: 'critical' },
  { id: '8', name: 'Retail', riskLevel: 'medium', status: 'pending', forecast: 'normal' }
];

const SupplyChainAnimation: React.FC<SupplyChainAnimationProps> = ({
  suppliers = defaultSuppliers,
  animationSpeed = 1,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moving, setMoving] = useState(false);
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [reached, setReached] = useState<boolean[]>(() =>
    Array(defaultSuppliers.length).fill(false)
  );
  const pathRef = useRef<SVGPathElement>(null);
  const timeoutRef = useRef<number>();

  const [tValues, setTValues] = useState<number[]>([]);

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const length = path.getTotalLength();
      const values = suppliers.map((_, i) =>
        (i / (suppliers.length - 1)) * length
      );
      setTValues(values);
      const { x, y } = path.getPointAtLength(values[0]);
      setDotPos({ x, y });
      setReached(Array(suppliers.length).fill(false));
    }
  }, [suppliers.length]);

  useEffect(() => {
    if (!pathRef.current || tValues.length === 0) return;

    setMoving(false);

    // Mark current node as reached
    setReached(prev => {
      const updated = [...prev];
      updated[currentIndex] = true;
      return updated;
    });

    timeoutRef.current = window.setTimeout(() => {
      setMoving(true);
      const start = tValues[currentIndex];
      const nextIndex = (currentIndex + 1) % suppliers.length;
      const end = tValues[nextIndex];
      const duration = 900 / animationSpeed;
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        const pos = pathRef.current!.getPointAtLength(
          start + (end - start) * t
        );
        setDotPos({ x: pos.x, y: pos.y });
        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          // If nextIndex is 0, we've completed a loop: reset reached
          if (nextIndex === 0) {
            setReached(Array(suppliers.length).fill(false));
          }
          setCurrentIndex(nextIndex);
        }
      };

      requestAnimationFrame(animate);
    }, 1200 / animationSpeed);

    const pos = pathRef.current.getPointAtLength(tValues[currentIndex]);
    setDotPos({ x: pos.x, y: pos.y });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line
  }, [currentIndex, animationSpeed, tValues]);

  return (
    <div className={`supply-chain-animation ${className}`}>
     
      <svg viewBox="0 0 900 260" className="sc-road-svg">
        <path ref={pathRef} d={roadPath} className="sc-road-path" />
        {tValues.map((len, i) => {
          if (!pathRef.current) return null;
          const { x, y } = pathRef.current.getPointAtLength(len);
          const forecast = suppliers[i].forecast || 'normal';
          return (
            <g key={suppliers[i].id}>
              <circle
                cx={x}
                cy={y}
                r={16}
                className={
                  `sc-checkpoint` +
                  (reached[i] ? ' reached' : '') +
                  (currentIndex === i && !moving ? ' active' : '') +
                  (forecast === 'warning' ? ' forecast-warning' : '') +
                  (forecast === 'critical' ? ' forecast-critical' : '')
                }
              />
              {/* Forecast icon */}
              {forecast !== 'normal' && (
                <text
                  x={x}
                  y={y - 26}
                  textAnchor="middle"
                  className="sc-forecast-icon"
                >
                  {forecast === 'warning' && '⚠️'}
                  {forecast === 'critical' && '⛔'}
                </text>
              )}
              <text
                x={x}
                y={y + 34}
                textAnchor="middle"
                className="sc-label"
              >
                {suppliers[i].name}
              </text>
            </g>
          );
        })}
        <circle
          cx={dotPos.x}
          cy={dotPos.y}
          r={10}
          className="sc-truck-dot"
        />
      </svg>
    </div>
  );
};

export default SupplyChainAnimation;