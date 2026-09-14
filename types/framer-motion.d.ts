// The npm registry install of framer-motion in this environment ships without
// its type declaration files (0 .d.ts in the package). This module shim lets
// TypeScript compile while the package is fixed upstream — it declares the
// exact value/type surface this codebase uses. Remove once the real
// `dist/index.d.ts` is present on disk.
declare module "framer-motion" {
  export type Variants = {
    [stage: string]: unknown;
    hidden?: Record<string, unknown>;
    show?: Record<string, unknown>;
  };

  export type AnimationControls = {
    start: (v: unknown) => Promise<unknown>;
    stop: () => void;
    set: (v: unknown) => void;
  };

  export type MotionValue<T = number> = {
    get: () => T;
    set: (v: T) => void;
    [key: string]: unknown;
  };

  export const motion: any;
  export const animate: (...args: unknown[]) => unknown;

  export function useAnimation(): AnimationControls;
  export function useMotionValue<T>(initial: T): MotionValue<T>;
  export function useSpring(
    source: unknown,
    opts?: unknown
  ): MotionValue<number>;
  export function useTransform(
    v: unknown,
    inr: number[],
    outr: number[]
  ): MotionValue<number>;
  export function useReducedMotion(): boolean;
}