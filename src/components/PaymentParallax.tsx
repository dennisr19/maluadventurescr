import { useEffect, useRef } from "react";

export function PaymentParallax() {
  const rootRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const image = imageRef.current;
    if (!root || !image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const bounds = root.getBoundingClientRect();
      const distance = window.innerHeight / 2 - (bounds.top + bounds.height / 2);
      image.style.transform = `translate3d(0, ${distance * 0.08}px, 0) scale(1.14)`;
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <img
        ref={imageRef}
        src="/images/manuel-antonio-hero.jpg"
        alt=""
        width={2400}
        height={1350}
        loading="lazy"
        className="absolute inset-x-0 -top-[15%] h-[130%] w-full object-cover opacity-30 [object-position:50%_58%] [transform:scale(1.14)] motion-reduce:[transform:scale(1.06)]"
      />
    </div>
  );
}
