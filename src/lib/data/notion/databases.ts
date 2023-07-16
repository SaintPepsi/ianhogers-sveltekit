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

export interface ProjectsDatabaseProperties {
    name: TitlePropertyItemObjectResponse;
    full_name: RichTextPropertyItemObjectResponse;
    logo: FilesPropertyItemObjectResponse;
    page_content: RelationPropertyItemObjectResponse;
    nav_title: RichTextPropertyItemObjectResponse;
    tags: RelationPropertyItemObjectResponse;
    solutions: RelationPropertyItemObjectResponse;
}

export interface TagsDatabaseProperties {
    name: TitlePropertyItemObjectResponse;
    solutions: RelationPropertyItemObjectResponse;
    projects: RelationPropertyItemObjectResponse;
}

export interface MyDatabases {
    projects: ProjectsDatabaseProperties;
    tags: TagsDatabaseProperties;
}

export type MyNotionDatabaseKeys = keyof MyDatabases;

interface ControlledPageObjectResponse<T extends MyNotionDatabaseKeys>
    extends Omit<PageObjectResponse, "properties"> {
    properties: MyDatabases[T];
}

interface ControlledPartialPageObjectResponse
    extends PartialPageObjectResponse {}

export interface ControlledQueryDatabaseResponse<
    T extends MyNotionDatabaseKeys,
> extends Omit<QueryDatabaseResponse, "results"> {
    results: Array<
        | ControlledPageObjectResponse<T>
        | ControlledPartialPageObjectResponse
    >;
}
