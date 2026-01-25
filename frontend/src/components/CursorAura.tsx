import { useEffect, useRef } from "react";

const CursorAura = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    if (!window.matchMedia("(pointer: fine)").matches) {
      ring.style.display = "none";
      dot.style.display = "none";
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ringX = x;
    let ringY = y;
    let frame = 0;

    const positionDot = () => {
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const positionRing = () => {
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(var(--cursor-scale, 1))`;
    };

    const handleMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      positionDot();
    };

    const handleDown = () => ring.classList.add("cursor-pressed");
    const handleUp = () => ring.classList.remove("cursor-pressed");
    const handleLeave = () => {
      ring.classList.add("cursor-hidden");
      dot.classList.add("cursor-hidden");
    };
    const handleEnter = () => {
      ring.classList.remove("cursor-hidden");
      dot.classList.remove("cursor-hidden");
    };

    const animate = () => {
      ringX += (x - ringX) * 0.12;
      ringY += (y - ringY) * 0.12;
      positionRing();
      frame = window.requestAnimationFrame(animate);
    };

    positionDot();
    positionRing();
    frame = window.requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mouseenter", handleEnter);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
};

export default CursorAura;
