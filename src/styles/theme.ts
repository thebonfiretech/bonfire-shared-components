export enum BorderRadius {
    none = "0rem",
    small = "0.25rem",
    medium = "0.5rem",
    large = "0.75rem",
    huge = "2rem",
    full = "31.25rem",
};

export enum Colors {
    "primary" = "#024FF0",
    "secondary" = "#0499C8",
    "background" = "#262626",
    "secondaryBackground" = "#363636",
    "tertiaryBackground" = "#303030",
    "text" = "#EEEEEE",
    "secondaryText" = "#A7A6A6",
    "focusText" = "#36D3DD",
};

export enum Gradients {
    primary = "linear-gradient(90deg, #024FF0 0%, #0499C8 100%)"
};

export enum FontSize {
    tiny = "0.75rem",
    small = "0.875rem",
    medium = "1rem",
    large = "1.25rem",
    huge = "1.5rem",
    extraHuge = "2rem",
};

type Theme = {
    colors: Record<keyof typeof Colors, string>,
    borderRadius: Record<keyof typeof BorderRadius, string>,
    gradients: Record<keyof typeof Gradients, string>,
    fontSize: Record<keyof typeof FontSize, string>,
};

const theme: Theme = {
    borderRadius: BorderRadius,
    gradients: Gradients,
    fontSize: FontSize,
    colors: Colors,
};

export default theme;