import '@lottiefiles/lottie-player';
import React, { useRef, useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        background?: string;
        speed?: string | number;
        loop?: boolean;
        autoplay?: boolean;
        style?: React.CSSProperties;
        mode?: string;
        renderer?: string;
      };
    }
  }
}

const DDILResilienceSimple: React.FC = React.memo(() => {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    const player = lottieRef.current;
    if (!player) return;

    const startFrame = 0;
    const endFrame = 90;

    const onFrame = () => {
      if (player.currentFrame >= endFrame) {
        window.requestAnimationFrame(() => {
          player.currentFrame = startFrame;
          player.play();
        });
      }
    };

    player.addEventListener('frame', onFrame);

    player.addEventListener('ready', () => {
      player.currentFrame = startFrame;
      player.play();
    });

    return () => {
      player.removeEventListener('frame', onFrame);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      {/* Dark, blurred, rounded background overlay */}
      <div
        className="absolute z-10 rounded-3xl shadow-2xl"
        style={{
          width: "1000px",
          height: "1000px",
          background: "rgba(10,16,24,0.3)",
          boxShadow: "0 0 64px 0 rgba(0,0,0,0.7)",
          filter: "blur(0.5px)",
          pointerEvents: "none",
        }}
      />
      <div className="relative z-20 flex justify-center items-center w-full">
        <lottie-player
          ref={lottieRef}
          src="/images/network.json"
          background="transparent"
          speed="1"
          loop={true}
          autoplay={true}
          style={{ width: "100%", maxWidth: "1000px", height: "1000px" }}
        />
      </div>
    </div>
  );
});

export default DDILResilienceSimple;