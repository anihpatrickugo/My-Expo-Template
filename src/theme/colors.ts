export const lightColors = {
  white: colorWithAlpha("#FFFFFF"),
  black: colorWithAlpha("#1E1F1F"),
  primary: colorWithAlpha("#3FA49F"),
  secondary: colorWithAlpha("#FB7A41"),
  tertiary: colorWithAlpha("#4725F7"),
  main: colorWithAlpha("#2E1030"),
  grey: colorWithAlpha("#F3F3F3"),
  grey2: colorWithAlpha("#D0D4EA"),
  grey3: colorWithAlpha("#505582"),
  brightestGrey: colorWithAlpha("#FCFCFC"),
  danger: colorWithAlpha("#A63434"),
  warning: colorWithAlpha("#FDD33E"),
  lightBlue: colorWithAlpha("#2282C8"),
  blue: colorWithAlpha("#3E7DF6"),
  red: colorWithAlpha("#FF5244"),
  green: colorWithAlpha("#32BA7C"),
  yellow: colorWithAlpha("#FFCC00"),
  bgPrimary: colorWithAlpha("#DEF4F2"),
  bgDanger: colorWithAlpha("#F0D1CF"),
};

export const darkColors = {
  white: colorWithAlpha("#FFFFFF"),
  black: colorWithAlpha("#1E1F1F"),
  primary: colorWithAlpha("#3FA49F"),
  secondary: colorWithAlpha("#FB7A41"),
  tertiary: colorWithAlpha("#4725F7"),
  main: colorWithAlpha("#2E1030"),
  grey: colorWithAlpha("#F3F3F3"),
  grey2: colorWithAlpha("#D0D4EA"),
  grey3: colorWithAlpha("#505582"),
  brightestGrey: colorWithAlpha("#FCFCFC"),
  danger: colorWithAlpha("#A63434"),
  warning: colorWithAlpha("#FDD33E"),
  lightBlue: colorWithAlpha("#2282C8"),
  blue: colorWithAlpha("#3E7DF6"),
  red: colorWithAlpha("#FF5244"),
  green: colorWithAlpha("#32BA7C"),
  yellow: colorWithAlpha("#FFCC00"),
  bgPrimary: colorWithAlpha("#DEF4F2"),
  bgDanger: colorWithAlpha("#F0D1CF"),
};

function colorWithAlpha(hex: string) {
  return (alpha: number = 1) => {
    // Remove the "#" if present
    hex = hex.replace(/^#/, "");

    // Handle 3-character hex strings
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join(""); // Convert to 6-digit hex
    }

    // Validate hex length (should be 6 after conversion)
    if (hex.length !== 6) {
      console.warn("Invalid hex color format. Must be 3 or 6 digits.");
      return `#${hex}`;
    }

    // Convert alpha from [0, 1] range to [0, 255] and then to hexadecimal
    const alphaHex = Math.round(alpha * 255)
      .toString(16)
      .padStart(2, "0");

    // Return the final hex color with alpha
    return `#${hex}${alphaHex}`;
  };
}
