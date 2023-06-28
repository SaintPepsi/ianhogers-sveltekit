export function cssStringify(obj: { [key: string]: string }): string {
    return Object.keys(obj)
        .map((k) => `${k}: ${obj[k]}`)
        .join(";");
}
