export function generateGradient(hexColor: string, toLight: boolean): string {
  // Utility function to adjust brightness of a hex color
  function adjustBrightness(hex: string, factor: number): string {
    // Remove '#' if present and convert to integer
    let color = hex.startsWith('#') ? hex.slice(1) : hex;
    const rgb = parseInt(color, 16);

    // Extract RGB components
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = rgb & 0xff;

    // Adjust each color channel
    r = Math.min(255, Math.max(0, r + factor));
    g = Math.min(255, Math.max(0, g + factor));
    b = Math.min(255, Math.max(0, b + factor));

    // Convert back to hex and return
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  }

  // Determine the factor for lightening or darkening
  const brightnessFactor = toLight ? 80 : -80;
  const adjustedColor = adjustBrightness(hexColor, brightnessFactor);

  // Generate the CSS gradient
  return `linear-gradient(90deg, ${hexColor}, ${adjustedColor})`;
}

export async function stringToSha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}