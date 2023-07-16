import type {
    ControlledPageObjectResponse,
    MyDatabaseProperties,
    PossibleControlledResponses,
} from "$data/notion/databases";
import { isFullPage } from "@notionhq/client";

export function isControlledFullPage<
    T extends keyof MyDatabaseProperties,
>(
    response: PossibleControlledResponses<T>,
): response is ControlledPageObjectResponse<T> {
    return isFullPage(response);
}
