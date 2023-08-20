/**********************************************************************************************************
 *   BASE IMPORT
 **********************************************************************************************************/
import type { BlockObjectResponseTypes } from "$utils/notion";
import type { SvelteComponent } from "svelte";

/**********************************************************************************************************
 *   SHARED
 **********************************************************************************************************/
import NotionBlockHeading from "$components/notion/NotionBlockHeading.svelte";
import NotionBlockImage from "$components/notion/NotionBlockImage.svelte";
import NotionBlockParagraph from "$components/notion/NotionBlockParagraph.svelte";
import NotionBlockQuote from "$components/notion/NotionBlockQuote.svelte";

type NotionBlockTypes = {
    [key in BlockObjectResponseTypes]?: typeof SvelteComponent;
};
export const notionBlockTypes: NotionBlockTypes = {
    paragraph: NotionBlockParagraph,
    heading_1: NotionBlockHeading,
    heading_2: NotionBlockHeading,
    heading_3: NotionBlockHeading,
    image: NotionBlockImage,
    quote: NotionBlockQuote,
};
