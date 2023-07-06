import type {
    FilesPropertyItemObjectResponse,
    PageObjectResponse,
    RelationPropertyItemObjectResponse,
    RichTextPropertyItemObjectResponse,
    TitlePropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type Block = PageObjectResponse["properties"];

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

function isProjectProperties(
    properties: PageObjectResponse["properties"],
) {}
