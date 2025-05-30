import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * A utility function that combines class names using clsx and merges Tailwind classes efficiently
 * @param inputs - Class names to combine (strings, objects, arrays)
 * @returns Merged and deduplicated class names string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
