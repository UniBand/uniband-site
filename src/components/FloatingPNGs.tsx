import React, { useEffect, useRef, useState } from "react";

const pngs = [
  "icons/bass-clarinet.png",
  "icons/bass-drum.png",
  "icons/bassoon.png",
  "icons/clarinet.png",
  "icons/cymbals.png",
  "icons/flute.png",
  "icons/french-horn.png",
  "icons/oboe.png",
  "icons/saxophone.png",
  "icons/snare-drum.png",
  "icons/timpani.png",
  "icons/trombone.png",
  "icons/trumpet.png",
  "icons/tuba.png",
  "icons/xylophone.png",
];

// Size and speed pairs
const presets = [
  { size: 20, speed: 2 },
  { size: 30, speed: 3 },
  { size: 40, speed: 4 },
];

const FloatingPNGs: React.FC<{ frequency: number; opacity: number }> = ({
  frequency,
  opacity,
}) => {
  const [floatingPNGs, setFloatingPNGs] = useState<JSX.Element[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const spawnPNG = (currentOpacity: number) => {
    const src = pngs[Math.floor(Math.random() * pngs.length)];
    const { size, speed } = presets[Math.floor(Math.random() * presets.length)];
    const xPosition = Math.random() * 100;
    const startYPosition = -size;

    const newPNG = (
      <div
        key={Math.random()}
        style={{
          animation: `float ${speed}s linear forwards`,
          bottom: startYPosition,
          height: `${size}px`,
          left: `${xPosition}%`,
          opacity: currentOpacity,
          pointerEvents: "none",
          position: "absolute",
          transition: "opacity 500ms ease",
          width: `${size}px`,
          zIndex: -1,
        }}
        onAnimationEnd={() => removePNG(newPNG)}
      >
        <img src={src} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
    );

    setFloatingPNGs((prev) => [...prev, newPNG]);
  };

  const removePNG = (png: JSX.Element) => {
    setFloatingPNGs((prev) => prev.filter((p) => p !== png));
  };

  // Spawning PNGs effect
  // biome-ignore lint/correctness/useExhaustiveDependencies: no ty
  useEffect(() => {
    const spawnInterval = () => {
      const randomDelay = Math.random() * 200 + frequency;
      timeoutRef.current = setTimeout(() => {
        spawnPNG(opacity);
        spawnInterval();
      }, randomDelay);
    };

    spawnInterval();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [frequency, opacity]);

  // Update opacity of all PNGs when the prop changes
  useEffect(() => {
    setFloatingPNGs((prev) =>
      prev.map((png) => {
        return React.cloneElement(png, {
          style: { ...png.props.style, opacity },
        });
      })
    );
  }, [opacity]);

  return (
    <div
      style={{
        bottom: 0,
        left: 0,
        overflow: "hidden",
        pointerEvents: "none",
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: -1,
      }}
    >
      {floatingPNGs}
      <style jsx>{`
        @keyframes float {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingPNGs;
