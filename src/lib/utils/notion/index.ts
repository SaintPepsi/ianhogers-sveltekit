import type { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type Block = PageObjectResponse["properties"]["string"];
export type BlockRecord = Record<string, Block>;

export type BlockTypes = Block["type"];
export type ExtractBlockType<T extends BlockTypes> = Extract<Block, { type: T }>;
export type TitleBlock = ExtractBlockType<"title">;
export type RichTextBlock = ExtractBlockType<"rich_text">;
export type FilesBlock = ExtractBlockType<"files">;
export type RelationBlock = ExtractBlockType<"relation">;

export interface CollatedPageDataRelations<T = BlockRecord> {
    properties: T;
    blocks?: BlockObjectResponse[];
}
export interface CollatedRelationBlock<T = BlockRecord> extends Omit<RelationBlock, "relation"> {
    relation: CollatedPageDataRelations<T>[];
}

export type CollatedBlocks = Exclude<Block, { type: "relation" }> | CollatedRelationBlock;
export type CollatedPageDataProperties = {
    [key: string]: CollatedBlocks;
};
