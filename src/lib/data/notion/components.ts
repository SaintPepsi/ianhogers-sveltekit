/**********************************************************************************************************
 *   BASE IMPORT
 **********************************************************************************************************/
import type { BlockObjectResponseTypes } from "$utils/notion";
import type { SvelteComponent } from "svelte";

/**********************************************************************************************************
 *   SHARED
 **********************************************************************************************************/
import NotionBlockParagraph from "$components/notion/NotionBlockParagraph.svelte";

type NotionBlockTypes = {
    [key in BlockObjectResponseTypes]?: typeof SvelteComponent;
};
export const notionBlockTypes: NotionBlockTypes = {
    paragraph: NotionBlockParagraph,
};
