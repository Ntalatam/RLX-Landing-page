import React, { useEffect, useRef, useState } from 'react';
import './SupplyChain.css';

const nodeNames = [
  'Logistics HQ',
  'Factory',
  'Port',
  'Depot',
  'Forward Base'
];

const nodeIcons = ['📡', '🏭', '⚓', '📦', '🛡️'];

// Main and alternate SVG paths
const mainPath =
  "M 60 200 Q 180 60 300 140 Q 420 220 540 100 Q 660 0 780 180";
const altPath =
  "M 60 200 Q 180 60 300 140 Q 420 60 540 140 Q 660 0 780 180"; // detour at Depot

const obstacleNodeIndex = 3; // e.g., obstacle at 'Depot'

const RealTimeVisibilityWithDetour: React.FC = () => {
  const mainPathRef = useRef<SVGPathElement>(null);
  const altPathRef = useRef<SVGPathElement>(null);
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tValues, setTValues] = useState<number[]>([]);
  const [useAlt, setUseAlt] = useState(false);
  const [obstacle, setObstacle] = useState(false);

  // Simulate obstacle appearing/disappearing every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setObstacle((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Calculate tValues for both paths
  useEffect(() => {
    const pathEl = useAlt && altPathRef.current ? altPathRef.current : mainPathRef.current;
    if (pathEl) {
      const length = pathEl.getTotalLength();
      const vals = nodeNames.map((_, i) =>
        (i / (nodeNames.length - 1)) * length
      );
      setTValues(vals);
      const { x, y } = pathEl.getPointAtLength(vals[0]);
      setDotPos({ x, y });
    }
  }, [useAlt]);

  // Animation logic
  useEffect(() => {
    const pathEl = useAlt && altPathRef.current ? altPathRef.current : mainPathRef.current;
    if (!pathEl || tValues.length === 0) return;

    const start = tValues[currentIndex];
    const nextIndex = (currentIndex + 1) % nodeNames.length;
    const end = tValues[nextIndex];
    const duration = 1000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const pos = pathEl.getPointAtLength(start + (end - start) * t);
      setDotPos({ x: pos.x, y: pos.y });
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        // If obstacle is active and we're at the node before the obstacle, switch to alt path
        if (obstacle && currentIndex === obstacleNodeIndex - 1) {
          setUseAlt(true);
        }
        // If we just passed the obstacle, return to main path
        if (useAlt && currentIndex === obstacleNodeIndex) {
          setUseAlt(false);
        }
        setCurrentIndex(nextIndex);
      }
    };

    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [currentIndex, tValues, useAlt, obstacle]);

  return (
    <div className="supply-chain-animation">
      <svg viewBox="0 0 840 260" className="sc-road-svg">
        {/* Main path */}
        <path ref={mainPathRef} d={mainPath} className="sc-road-path rtv-path" style={{ opacity: useAlt ? 0.3 : 1 }} />
        {/* Alternate path */}
        <path ref={altPathRef} d={altPath} className="sc-road-path rtv-path" style={{ opacity: useAlt ? 1 : 0.3, strokeDasharray: useAlt ? "8 4" : "none" }} />
        {tValues.map((len, i) => {
          const pathEl = useAlt && altPathRef.current ? altPathRef.current : mainPathRef.current;
          if (!pathEl) return null;
          const { x, y } = pathEl.getPointAtLength(len);
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={16}
                className={
                  "sc-checkpoint rtv-node" +
                  (currentIndex === i ? " active" : "")
                }
              />
              {/* Obstacle icon */}
              {obstacle && i === obstacleNodeIndex && (
                <text
                  x={x}
                  y={y - 26}
                  textAnchor="middle"
                  className="sc-forecast-icon"
                  style={{ fontSize: 28 }}
                >
                  🚧
                </text>
              )}
              <text
                x={x}
                y={y}
                textAnchor="middle"
                className="sc-node-icon"
                style={{ fontSize: 22 }}
              >
                {nodeIcons[i]}
              </text>
              <text
                x={x}
                y={y + 34}
                textAnchor="middle"
                className="sc-label"
              >
                {nodeNames[i]}
              </text>
            </g>
          );
        })}
        <circle
          cx={dotPos.x}
          cy={dotPos.y}
          r={10}
          className="sc-truck-dot rtv-dot"
        />
      </svg>
    </div>
  );
};

export default RealTimeVisibilityWithDetour;