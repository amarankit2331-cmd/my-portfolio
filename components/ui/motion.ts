/**
 * Shared scroll-reveal variant factory.
 *
 * Five sections previously each declared an identical `fadeUp` object
 * (only the rise distance and per-item stagger differ). Centralizing it
 * keeps the reveal timing consistent and behavior unchanged.
 *
 * @param rise vertical rise distance in px (default 24)
 * @param step per-item stagger delay in seconds (default 0.08)
 */
export function makeFadeUp(rise = 24, step = 0.08) {
  return {
    hidden: { opacity: 0, y: rise },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * step, ease: "easeOut" as const },
    }),
  };
}
