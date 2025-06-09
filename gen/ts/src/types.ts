export type Nullable<T> = T | undefined | null

export type F<A extends unknown[], R, T = unknown> = (this: T, ...args: A) => R
