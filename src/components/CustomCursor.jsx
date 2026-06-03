import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div id="cursor" style={{ transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)` }}></div>
      <div id="cursor-ring" style={{ transform: `translate3d(${position.x - 18}px, ${position.y - 18}px, 0)` }}></div>
    </>
  );
}
