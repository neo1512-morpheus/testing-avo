export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function openOrderModal(): void {
  console.log('openOrderModal function called');
  if ((window as any).showOrderModal) {
    (window as any).showOrderModal();
    console.log('Modal opened via window function');
  } else {
    console.error('showOrderModal function not available on window');
  }
}

export function closeOrderModal(): void {
  console.log('closeOrderModal function called');
  if ((window as any).hideOrderModal) {
    (window as any).hideOrderModal();
    console.log('Modal closed via window function');
  } else {
    console.error('hideOrderModal function not available on window');
  }
}