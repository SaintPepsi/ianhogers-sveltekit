<script lang="ts">
    export let ratio: number = 0;
    export let secondary: boolean = false;
    export let column: boolean = false;
    export let interactable: boolean = false;

    $: ratioStyle = ratio
        ? `padding-top: calc(100% * ${ratio});`
        : "";
    $: style = [ratioStyle].join("");
</script>

<div
    class="Tile"
    {style}
    class:secondary
    class:column
    class:interactable
>
    {#if ratio}
        <div class="ratioWrapper">
            <slot />
        </div>
    {:else}
        <slot />
    {/if}
</div>

<style lang="scss">
    @import "$styles/theme.scss";
    .Tile {
        position: relative;
        border-radius: $padding;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.014),
            0.7px 0.7px 5.3px rgba(0, 0, 0, 0.02),
            1.3px 1.3px 10px rgba(0, 0, 0, 0.025),
            2.2px 2.2px 17.9px rgba(0, 0, 0, 0.03),
            4.2px 4.2px 33.4px rgba(0, 0, 0, 0.036),
            10px 10px 80px rgba(0, 0, 0, 0.05);

        &.interactable {
            &:hover {
                box-shadow: 0.1px 0.1px 2.2px rgba(0, 0, 0, 0.042),
                    0.3px 0.3px 5.3px rgba(0, 0, 0, 0.061),
                    0.6px 0.6px 10px rgba(0, 0, 0, 0.075),
                    1.1px 1.1px 17.9px rgba(0, 0, 0, 0.089),
                    2.1px 2.1px 33.4px rgba(0, 0, 0, 0.108),
                    5px 5px 80px rgba(0, 0, 0, 0.15);
            }
        }

        &.column {
            flex-direction: column;

            .ratioWrapper {
                flex-direction: column;
            }
        }
        .ratioWrapper {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
        }
        &.secondary {
            @extend .tertiary;
            .ratioWrapper {
                > :global(*) {
                    @extend .on-tertiary-text;
                }
            }
        }
    }
</style>
