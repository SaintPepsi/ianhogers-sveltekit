/**********************************************************************************************************
 *   BASE IMPORT
 **********************************************************************************************************/
import type { BlockObjectResponseTypes } from "$utils/notion";
import type { SvelteComponent } from "svelte";

/**********************************************************************************************************
 *   SHARED
 **********************************************************************************************************/
import NotionBlockHeading from "$components/notion/NotionBlockHeading.svelte";
import NotionBlockParagraph from "$components/notion/NotionBlockParagraph.svelte";

type NotionBlockTypes = {
    [key in BlockObjectResponseTypes]?: typeof SvelteComponent;
};
export const notionBlockTypes: NotionBlockTypes = {
    paragraph: NotionBlockParagraph,
    heading_1: NotionBlockHeading,
    heading_2: NotionBlockHeading,
    heading_3: NotionBlockHeading,
};
