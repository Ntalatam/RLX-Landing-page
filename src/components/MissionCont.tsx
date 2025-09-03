import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NODES = 6;
const CONTAINER_SIZE = 400;
const CENTER = CONTAINER_SIZE / 2;
const NODE_SIZE = 56;
const LINE_LENGTH = 145;

const nodes = [
  { label: "Depot", icon: "🏢" },
  { label: "Ammunition", icon: "💣" },
  { label: "FOB", icon: "🪖" },
  { label: "Convoy", icon: "🚚" },
  { label: "Combat Zone", icon: "🎯" },
  { label: "Resupply", icon: "📦" },
];

const getNodePosition = (idx: number) => {
  const angle = (360 / NODES) * idx - 90; // Start at top
  const rad = (angle * Math.PI) / 180;
  const x = CENTER + LINE_LENGTH * Math.cos(rad) - NODE_SIZE / 2;
  const y = CENTER + LINE_LENGTH * Math.sin(rad) - NODE_SIZE / 2;
  return { x, y };
};

const MissionCont: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % NODES);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[440px] flex flex-col items-center">
      <div className="relative" style={{ width: CONTAINER_SIZE, height: CONTAINER_SIZE }}>
        {/* SVG lines connecting nodes */}
        <svg
          width={CONTAINER_SIZE}
          height={CONTAINER_SIZE}
          className="absolute left-0 top-0 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {nodes.map((_, idx) => {
            const from = getNodePosition(idx);
            const to = getNodePosition((idx + 1) % NODES);
            return (
              <motion.line
                key={idx}
                x1={from.x + NODE_SIZE / 2}
                y1={from.y + NODE_SIZE / 2}
                x2={to.x + NODE_SIZE / 2}
                y2={to.y + NODE_SIZE / 2}
                stroke="#38bdf8"
                strokeWidth={4}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.2 + idx * 0.12, duration: 0.5, type: "spring" }}
                opacity={0.7}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node, idx) => {
          const { x, y } = getNodePosition(idx);
          const isActive = idx === activeNode;
          return (
            <motion.div
              key={node.label}
              className="absolute flex flex-col items-center"
              style={{
                left: x,
                top: y,
                width: NODE_SIZE,
                height: NODE_SIZE,
                zIndex: 2,
              }}
              animate={{
                scale: isActive ? 1.18 : 1,
                boxShadow: isActive
                  ? "0 0 24px #38bdf8cc"
                  : "0 0 10px #0ea5e988",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="rounded-full flex items-center justify-center"
                style={{
                  width: NODE_SIZE,
                  height: NODE_SIZE,
                  background: isActive ? "#38bdf8" : "#0ea5e9",
                  border: isActive ? "3px solid #fff" : "2px solid #fff",
                  fontSize: 28,
                  color: "#fff",
                  boxShadow: isActive
                    ? "0 0 24px #38bdf8cc"
                    : "0 0 10px #0ea5e988",
                  position: "relative",
                }}
                animate={{
                  scale: isActive ? [1, 1.13, 1] : 1,
                }}
                transition={{
                  repeat: isActive ? Infinity : 0,
                  duration: 1.2,
                }}
              >
                {node.icon}
              </motion.div>
              <span
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  color: "#fff",
                  fontWeight: 600,
                  letterSpacing: 1,
                  textShadow: "0 2px 8px #000a",
                  textTransform: "uppercase",
                  fontFamily: "'Oswald', 'Roboto Condensed', Arial, sans-serif",
                  textAlign: "center",
                  width: NODE_SIZE + 20,
                }}
              >
                {node.label}
              </span>
            </motion.div>
          );
        })}

        {/* Animated convoy/truck moving between nodes */}
        <AnimatePresence>
          <motion.div
            key={activeNode}
            className="absolute"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.4 }}
            style={{
              left: getNodePosition(activeNode).x + NODE_SIZE / 2 - 18,
              top: getNodePosition(activeNode).y + NODE_SIZE / 2 - 18,
              width: 36,
              height: 36,
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <motion.span
              className="text-3xl"
              animate={{
                scale: [1, 1.18, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
              }}
              style={{
                display: "inline-block",
                filter: "drop-shadow(0 0 8px #38bdf8cc)",
              }}
            >
              🚚
            </motion.span>
          </motion.div>
        </AnimatePresence>

        {/* Central command node */}
        <motion.div
          className="absolute rounded-full flex justify-center items-center z-20"
          style={{
            width: NODE_SIZE + 44,
            height: NODE_SIZE + 44,
            left: CENTER - (NODE_SIZE + 44) / 2,
            top: CENTER - (NODE_SIZE + 44) / 2,
            background: "#38bdf8",
            boxShadow: "0 0 36px rgba(56,189,248,0.7)",
            border: "4px solid #fff",
          }}
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 0 36px rgba(56,189,248,0.7)",
              "0 0 48px rgba(56,189,248,1)",
              "0 0 36px rgba(56,189,248,0.7)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="text-[2.3rem] text-[#0a192f]">🛰️</div>
        </motion.div>
      </div>
     
    </div>
  );
};

export default MissionCont;