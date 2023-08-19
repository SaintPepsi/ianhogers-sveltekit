<script lang="ts">
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Label from "$components/Label.svelte";

    /**********************************************************************************************************
     *   UTILITIES
     **********************************************************************************************************/
    import { getTitleBlockPlainText } from "$utils/notion/methods";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import type { CollatedTagsBlock } from "$data/notion/databases";

    export let tags: CollatedTagsBlock;
    console.log("tags", tags);
</script>

{#each tags.relation as { properties }}
    <Label type="tertiary" size="small">
        {getTitleBlockPlainText(properties.name)}
    </Label>
{/each}
