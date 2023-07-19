import type { FilesBlock, RichTextBlock, TitleBlock } from "$utils/notion";

export function getPlainTextFromRichText(richTextBlock: RichTextBlock) {
    return richTextBlock.rich_text.map((text) => text.plain_text).join("");
}

export function getTitleBlockPlainText(titleBlock: TitleBlock) {
    return titleBlock.title.map((text) => text.plain_text).join(" ");
}

export function getFileBlockFile(fileBlock: FilesBlock) {
    const firstFile = fileBlock.files[0];
    if (firstFile.type === "file") {
        return firstFile.file.url;
    }
    return "https://api.iconify.design/solar:gallery-round-broken.svg";
}
