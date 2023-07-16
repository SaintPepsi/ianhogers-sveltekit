import type {
    FilesPropertyItemObjectResponse,
    PageObjectResponse,
    RelationPropertyItemObjectResponse,
    RichTextPropertyItemObjectResponse,
    TitlePropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type Block = Extract<
    PageObjectResponse["properties"]["string"],
    any
>;
export type BlockTypes = Block["type"];
export type TitleBlock = Extract<Block, { type: "title" }>;
export type FilesBlock = Extract<Block, { type: "files" }>;

export interface ProjectDatabase {
    full_name: RichTextPropertyItemObjectResponse;
    logo: FilesPropertyItemObjectResponse;
    page_content: RelationPropertyItemObjectResponse;
    nav_title: RichTextPropertyItemObjectResponse;
    tags: RelationPropertyItemObjectResponse;
    solutions: RelationPropertyItemObjectResponse;
    name: TitlePropertyItemObjectResponse;
}

export type ProjectDatabaseKeys = keyof ProjectDatabase;
