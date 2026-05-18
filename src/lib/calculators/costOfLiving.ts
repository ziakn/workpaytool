export function costOfLivingIndex(baseIndex: number, targetIndex: number) {
  return Math.round(((targetIndex - baseIndex) / baseIndex) * 100);
}
