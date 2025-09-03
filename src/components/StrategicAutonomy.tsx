import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StrategicAutonomy: React.FC = () => {
  // States for different connection types
  const [connectionStates, setConnectionStates] = useState({
    "1": 'normal',
    "2": 'normal',
    "3": 'normal',
    "4": 'normal',
    "5": 'normal'
  });

  const [activeStatus, setActiveStatus] = useState('normal');

  // Descriptions for each state
  const statusDescriptions: Record<string, string> = {
    normal: 'Normal operation with full connectivity',
    disrupted: 'Continuing operation despite disrupted connectivity',
    degraded: 'Maintaining function with degraded connection quality',
    intermittent: 'Processing continues through intermittent connectivity',
    lowBandwidth: 'Efficient operation even with minimal bandwidth'
  };

  // Constants
  const CONTAINER_SIZE = 360;
  const CENTER = CONTAINER_SIZE / 2;
  const CENTER_NODE_SIZE = 100;
  const OUTER_NODE_SIZE = 60;
  const LINE_LENGTH = 130; // slightly less so node overlaps line end

  // Calculate positions for outer nodes
  const getOuterNodePosition = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    const x = CENTER + LINE_LENGTH * Math.cos(rad) - OUTER_NODE_SIZE / 2;
    const y = CENTER + LINE_LENGTH * Math.sin(rad) - OUTER_NODE_SIZE / 2;
    return { x, y };
  };

  useEffect(() => {
    const connectionStates = ['normal', 'disrupted', 'degraded', 'intermittent', 'low-Bandwidth'];
    let counter = 0;

    const interval = setInterval(() => {
      const currentState = connectionStates[counter % connectionStates.length];
      setActiveStatus(currentState);

      setConnectionStates(prev => {
        const newStates = { ...prev };
        const randomConnection = (Math.floor(Math.random() * 5) + 1).toString();
        newStates[randomConnection as keyof typeof prev] = currentState;
        return newStates;
      });

      counter++;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return '#64ffda';
      case 'disrupted': return '#ff6b6b';
      case 'degraded': return '#ff9e7a';
      case 'intermittent': return '#ffd166';
      case 'lowBandwidth': return '#118ab2';
      default: return '#64ffda';
    }
  };

  const getStatusBackground = (status: string) => {
    switch (status) {
      case 'normal': return 'linear-gradient(90deg, #64ffda, #64ffda)';
      case 'disrupted': return 'linear-gradient(90deg, #64ffda, transparent, #64ffda, transparent)';
      case 'degraded': return 'linear-gradient(90deg, #64ffda, #ff6b6b)';
      case 'intermittent': return 'linear-gradient(90deg, #64ffda, #ffd166)';
      case 'lowBandwidth': return 'linear-gradient(90deg, #64ffda, #118ab2)';
      default: return '#64ffda';
    }
  };

  return (
    <div className="relative w-full h-[400px] flex flex-col items-center">
      <div className="relative" style={{ width: CONTAINER_SIZE, height: CONTAINER_SIZE }}>
        {/* Central Node */}
        <motion.div
          className="absolute rounded-full flex justify-center items-center z-10"
          style={{
            width: CENTER_NODE_SIZE,
            height: CENTER_NODE_SIZE,
            left: CENTER - CENTER_NODE_SIZE / 2,
            top: CENTER - CENTER_NODE_SIZE / 2,
            background: '#64ffda',
            boxShadow: '0 0 20px rgba(100, 255, 218, 0.5)'
          }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 20px rgba(100, 255, 218, 0.5)',
              '0 0 30px rgba(100, 255, 218, 0.8)',
              '0 0 20px rgba(100, 255, 218, 0.5)'
            ]
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <div className="text-[2rem] text-[#0a192f]">⚙️</div>
        </motion.div>

        {/* Lines and Outer Nodes */}
        {[0, 72, 144, 216, 288].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = CENTER + LINE_LENGTH * Math.cos(rad);
          const y2 = CENTER + LINE_LENGTH * Math.sin(rad);

          const connectionKey = (idx + 1).toString();
          const status = connectionStates[connectionKey as keyof typeof connectionStates];
          const nodePos = getOuterNodePosition(angle);

          return (
            <React.Fragment key={angle}>
              {/* Connection line */}
              <motion.div
                className="absolute"
                style={{
                  left: CENTER,
                  top: CENTER,
                  width: Math.sqrt(Math.pow(x2 - CENTER, 2) + Math.pow(y2 - CENTER, 2)),
                  height: 4,
                  background: getStatusBackground(status),
                  transform: `rotate(${angle}deg) translateY(-2px)`,
                  transformOrigin: '0 50%',
                }}
                animate={{
                  opacity: status === 'disrupted' ? [1, 0.4, 1] : 1,
                  backgroundPosition: status === 'intermittent' ? ['0% 0%', '100% 100%'] : '0% 0%',
                }}
                transition={{
                  repeat: Infinity,
                  duration: status === 'disrupted' ? 1.5 : 3,
                  ease: "linear"
                }}
              />

              {/* Outer node */}
              <motion.div
                className="absolute flex justify-center items-center rounded-full"
                style={{
                  width: OUTER_NODE_SIZE,
                  height: OUTER_NODE_SIZE,
                  left: nodePos.x,
                  top: nodePos.y,
                  backgroundColor: getStatusColor(status),
                  boxShadow: '0 0 15px rgba(100, 255, 218, 0.3)'
                }}
                animate={{
                  scale: [1, status === activeStatus ? 1.15 : 1, 1],
                  boxShadow: [
                    '0 0 15px rgba(100, 255, 218, 0.3)',
                    status === activeStatus ? '0 0 25px rgba(100, 255, 218, 0.6)' : '0 0 15px rgba(100, 255, 218, 0.3)',
                    '0 0 15px rgba(100, 255, 218, 0.3)'
                  ]
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                {idx === 0 && '🔌'}
                {idx === 1 && '📡'}
                {idx === 2 && '🛰️'}
                {idx === 3 && '📱'}
                {idx === 4 && '🖥️'}
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>

      <div
        className="absolute bottom-5 bg-[rgba(10,25,47,0.7)] px-4 py-2 rounded-full text-[#64ffda] text-sm font-semibold"
        style={{ border: '1px solid #64ffda' }}
      >
        {activeStatus.charAt(0).toUpperCase() + activeStatus.slice(1)} Mode
      </div>
    </div>
  );
};

export default StrategicAutonomy;