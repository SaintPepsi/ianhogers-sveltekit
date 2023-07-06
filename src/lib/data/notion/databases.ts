import type { NotionDatabaseKeys } from "$lib/data/notion/config";
import type {
    PropertyItemObjectResponse,
    FilesPropertyItemObjectResponse,
    PageObjectResponse,
    RelationPropertyItemObjectResponse,
    RichTextPropertyItemObjectResponse,
    TitlePropertyItemObjectResponse,
    QueryDatabaseResponse,
    PartialDatabaseObjectResponse,
    PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type MyNotionDatabases = keyof NotionDatabaseKeys;

export interface ProjectDatabaseProperties {
    full_name: RichTextPropertyItemObjectResponse;
    logo: FilesPropertyItemObjectResponse;
    page_content: RelationPropertyItemObjectResponse;
    nav_title: RichTextPropertyItemObjectResponse;
    tags: RelationPropertyItemObjectResponse;
    solutions: RelationPropertyItemObjectResponse;
    name: TitlePropertyItemObjectResponse;
}

export interface MyDatabases {
    projects: ProjectDatabaseProperties;
}

interface ControlledPageObjectResponse<T extends MyNotionDatabases>
    extends Omit<PageObjectResponse, "properties"> {
    properties: MyDatabases[T];
}

interface ControlledPartialPageObjectResponse
    extends PartialPageObjectResponse {}

export interface ControlledQueryDatabaseResponse<
    T extends MyNotionDatabases,
> extends Omit<QueryDatabaseResponse, "results"> {
    results: Array<
        | ControlledPageObjectResponse<T>
        | ControlledPartialPageObjectResponse
    >;
}
