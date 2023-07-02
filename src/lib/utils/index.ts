const px = (val: number | string) => `${val}px`;

export function cssStringify(obj: {
    [key: string]: string | number;
}): string {
    return Object.keys(obj)
        .map((k) => {
            const val = obj[k];
            switch (k) {
                case "margin-left":
                case "margin-right":
                case "margin-top":
                case "margin-bottom":
                case "padding-left":
                case "padding-right":
                case "padding-top":
                case "padding-bottom":
                case "gap":
                    return `${k}: ${px(val)}`;
                default:
                    return `${k}: ${val}`;
            }
        })
        .join("; ");
}

export type ThemeType =
    | "primary"
    | "secondary"
    | "tertiary"
    | "error";
export function createThemeClasses(
    type: ThemeType,
    interactable: boolean,
) {
    const bgClass = `${type}${interactable ? "" : "-container"}`;
    const textClass = `on-${bgClass}-text`;
    console.log("bgClass", bgClass);
    console.log("textClass", textClass);

    return `${bgClass} ${textClass}`;
}
