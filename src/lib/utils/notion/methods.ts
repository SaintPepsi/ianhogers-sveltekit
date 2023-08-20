import type { CollatedPageContentBlock } from "$data/notion/databases";
import type { CollatedPageDataRelations, FilesBlock, RichTextBlock, TitleBlock } from "$utils/notion";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function getPlainTextFromRichText(richTextBlock: RichTextBlock) {
    return richTextBlock.rich_text.map((text) => text.plain_text).join("");
}

export function getTitleBlockPlainText(titleBlock: TitleBlock) {
    return titleBlock.title
        .map((text) => {
            return text.plain_text;
        })
        .join(" ");
}

export function getFileBlockFile(fileBlock: FilesBlock) {
    const firstFile = fileBlock.files[0];
    if (firstFile.type === "file") {
        return firstFile.file.url;
    }
    return "https://api.iconify.design/solar:gallery-round-broken.svg";
}

export function hasBlocks<T>(
    relation: CollatedPageDataRelations<T>,
): relation is Required<CollatedPageDataRelations<T>> {
    return Object.hasOwn(relation, "blocks");
}

export function getPageContentBlocks(pageContentBlock: CollatedPageContentBlock): BlockObjectResponse[] {
    if (hasBlocks(pageContentBlock.relation[0])) {
        return pageContentBlock.relation[0].blocks;
    }
    return [];
}
