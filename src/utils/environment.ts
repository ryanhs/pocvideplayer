export const isBrowser = typeof window !== "undefined";

export const BASE_URL = isBrowser
  ? (process.env.NEXT_PUBLIC_BASE_URL || `${window.location.protocol}//${window.location.hostname}`)
  : '';