/**********************************************************************************************************
 *   BASE IMPORT
 **********************************************************************************************************/
import type {
    PageObjectResponse,
    QueryDatabaseResponse,
    PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

/**********************************************************************************************************
 *   CONSTS
 **********************************************************************************************************/
import type { CollatedRelationBlock, FilesBlock, RelationBlock, RichTextBlock, TitleBlock } from "$utils/notion";

/**
 * Database properties Types
 */
/** Projects */
export interface ProjectsDatabaseProperties {
    name: TitleBlock;
    full_name: RichTextBlock;
    logo: FilesBlock;
    logo_colour: RichTextBlock;
    page_content: RelationBlock;
    nav_title: RichTextBlock;
    tags: RelationBlock;
    solutions: RelationBlock;
}
type CollatedProjectsBlock = CollatedRelationBlock<ProjectsDatabaseProperties>;

/** Tags */
export interface TagsDatabaseProperties {
    name: TitleBlock;
    solutions: RelationBlock;
    projects: RelationBlock;
}
export type CollatedTagsBlock = CollatedRelationBlock<TagsDatabaseProperties>;

/** Page Content */
export interface PageContentDatabaseProperties {
    name: TitleBlock;
    projects: RelationBlock;
}
type CollatedPageContentBlock = CollatedRelationBlock<PageContentDatabaseProperties>;

/** Solutions */
export interface SolutionsDatabaseProperties {
    name: TitleBlock;
    tags: RelationBlock;
    content: RichTextBlock;
    projects: RelationBlock;
}
type CollatedSolutionsBlock = CollatedRelationBlock<SolutionsDatabaseProperties>;

/**
 * database properties data Types
 */
/** Projects */
export interface ProjectsDatabasePropertiesData
    extends Omit<ProjectsDatabaseProperties, "tags" | "solutions" | "page_content"> {
    tags: CollatedTagsBlock;
    page_content: CollatedPageContentBlock;
    solutions: CollatedSolutionsBlock;
}

/** Tags */
export interface TagsDatabasePropertiesData extends Omit<TagsDatabaseProperties, "solutions" | "projects"> {
    solutions: CollatedSolutionsBlock;
    projects: CollatedProjectsBlock;
}

/** Page Content */
export interface PageContentDatabasePropertiesData extends Omit<PageContentDatabaseProperties, "projects"> {
    projects: CollatedProjectsBlock;
}
/** Solutions */
export interface SolutionsDatabasePropertiesData extends Omit<SolutionsDatabaseProperties, "tags" | "projects"> {
    tags: CollatedTagsBlock;
    projects: CollatedProjectsBlock;
}

/**
 * Properties Type Collator
 */
export interface MyDatabaseProperties {
    projects: ProjectsDatabaseProperties;
    tags: TagsDatabaseProperties;
    page_content: PageContentDatabaseProperties;
    solutions: SolutionsDatabaseProperties;
}

export interface MyDatabasePropertiesData {
    projects: ProjectsDatabasePropertiesData;
    tags: TagsDatabasePropertiesData;
    page_content: PageContentDatabasePropertiesData;
    solutions: SolutionsDatabasePropertiesData;
}

export type MyNotionDatabaseKeys = keyof MyDatabaseProperties;

export interface ControlledPageObjectResponse<T extends MyNotionDatabaseKeys>
    extends Omit<PageObjectResponse, "properties"> {
    properties: MyDatabaseProperties[T];
}

export interface ControlledPartialPageObjectResponse extends PartialPageObjectResponse {}

export type PossibleControlledResponses<T extends MyNotionDatabaseKeys> =
    | ControlledPageObjectResponse<T>
    | ControlledPartialPageObjectResponse;

export interface ControlledQueryDatabaseResponse<T extends MyNotionDatabaseKeys>
    extends Omit<QueryDatabaseResponse, "results"> {
    results: Array<PossibleControlledResponses<T>>;
}
