<script lang="ts">
    /**********************************************************************************************************
     *   BASE IMPORT
     **********************************************************************************************************/
    import Img from "@zerodevx/svelte-img";
    import SolarPlainBoldDuotone from "~icons/solar/plain-bold-duotone";
    /**********************************************************************************************************
     *   SHARED
     **********************************************************************************************************/
    import Bar from "$components/Bar.svelte";
    import Body from "$components/Body.svelte";
    import Container from "$components/Container.svelte";
    import Flex from "$components/Flex.svelte";
    import Spacer from "$components/Spacer.svelte";
    import Span from "$components/Span.svelte";
    import Tile from "$components/Tile.svelte";

    /********** SHARED Styled **********/
    import HeadingTileContent from "$components/styled/HeadingTileContent.svelte";
    import SolarChatRoundLineBoldDuotone from "~icons/solar/chat-round-line-bold-duotone";

    /**********************************************************************************************************
     *   CONSTS
     **********************************************************************************************************/
    import { PADDING } from "$lib/data/theme";

    /********** Images **********/
    import { IMAGE_profileShot } from "$lib/assets/images";
</script>

<Container size="medium">
    <Spacer bottom={4}>
        <HeadingTileContent>
            <Img style={"width: 100%; height: auto;"} slot="Tile" {...IMAGE_profileShot} />
            <Flex slot="Content" align="start" direction="column">
                <SolarChatRoundLineBoldDuotone class="on-primary-container-text" font-size={PADDING * 6} />
                <h2>Hello, i'm Ian</h2>
                <Bar />
            </Flex>
        </HeadingTileContent>
    </Spacer>
</Container>

<Container size="medium">
    <Spacer top={4}>
        <Tile type="primary">
            <Spacer top={4} bottom={4} left={4} right={4} padding>
                <Body>
                    <h3>About me</h3>
                    <p>
                        I am an interactive media developer from the Netherlands, based in Melbourne, Australia. My
                        early fascination with computers led me to explore Programming, igniting my passion for the
                        field. This drove me to study Interactive Media and Design, where I acquired proficiency in
                        programming languages like HTML, CSS, JavaScript and more.
                    </p>
                </Body>
            </Spacer>
        </Tile>

        <Spacer top={4} bottom={4}>
            <!-- <Tile type="secondary"> -->
            <!-- <Spacer top={4} bottom={4} left={4} right={4} padding> -->
            <Body>
                <h3>My Drive</h3>
                <p>
                    Curiosity is the lifeblood that propels me forward on my exhilarating coding journey. It is the
                    driving force deep within my being that compels me to relentlessly pursue knowledge, fearlessly
                    confront complex problems, and boldly push the boundaries of what can be achieved. I am enthralled
                    by the immersive experience of delving into the intricate realms of code, unraveling the inner
                    workings of complex systems, and artfully crafting solutions that resonate with elegance. This
                    insatiable thirst for improvement, coupled with an innate yearning to innovate and create
                    transformative software, serves as the very essence of my being. With unwavering dedication, my
                    unrelenting curiosity takes on a tangible form through my unyielding pursuit of understanding, my
                    indomitable determination to surmount challenges, and my eagerness to embrace the uncharted. It
                    fuels my relentless pursuit of knowledge, propels me to master new programming languages,
                    frameworks, and cutting-edge technologies, and ensures I remain at the forefront of the
                    ever-evolving landscape of software development. This foundation, built upon the bedrock of my
                    passion, unwavering commitment, and tireless dedication, forms the solid ground upon which I
                    construct my career and propel myself towards a future brimming with boundless possibilities.
                </p>
            </Body>
            <!-- </Spacer> -->
            <!-- </Tile> -->
        </Spacer>

        <Spacer top={4} bottom={4}>
            <Tile type="tertiary">
                <Spacer top={4} bottom={4} left={4} right={4} padding>
                    <Flex align="center" direction="column">
                        <Flex justify="start">
                            <SolarPlainBoldDuotone font-size={PADDING * 4} />
                            <h4>Fun Fact</h4>
                        </Flex>
                        <Span size="large" textCenter>The distance between Amsterdam and Melbourne is 16.536km!</Span>
                        <Span size="large" textCenter>
                            That's {~~((16_536 / 15_000) * 100) / 100}
                            "Big Laps" around Australia!
                        </Span>
                        <Span size="large" textCenter>
                            That's {Math.ceil((16_536 / 1_091) * 10) / 10}
                            Laps around The Netherlands!
                        </Span>
                    </Flex>
                </Spacer>
            </Tile>
        </Spacer>
    </Spacer>
</Container>
