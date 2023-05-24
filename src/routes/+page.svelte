<script lang="ts">
    import profileShot from "$lib/assets/profile-shot.jpg";

    // https://svelte-icons.vercel.app/
    import MdBuild from "svelte-icons/md/MdBuild.svelte";
    import MdMail from "svelte-icons/md/MdMail.svelte";
    import FaExternalLinkAlt from "svelte-icons/fa/FaExternalLinkAlt.svelte";

    import FaMobileAlt from "svelte-icons/fa/FaMobileAlt.svelte";
    import FaShoppingCart from "svelte-icons/fa/FaShoppingCart.svelte";
    import FaGlobe from "svelte-icons/fa/FaGlobe.svelte";
    import FaChartBar from "svelte-icons/fa/FaChartBar.svelte";
    import FaGamepad from "svelte-icons/fa/FaGamepad.svelte";

    import FaRobot from "svelte-icons/fa/FaRobot.svelte";
</script>

<div class="wrapper">
    <div class="content">
        <div class="container">
            <img
                width="250"
                height="250"
                alt="Profile Shot Ian Hogers"
                src={profileShot}
            />

            <h1>
                Ian Hogers
                <br />
                Software Engineer
            </h1>
        </div>
        <h2>Building solutions to your needs.</h2>
        <div class="buttons">
            <a
                href="mailto:info@ianhogers.com?subject=E-Commerce Stores / Shopify"
                class="icon white wrapped"
            >
                <FaShoppingCart />
                <span class="shadow">E-Commerce / Shopify</span>
            </a>
            <a
                href="mailto:info@ianhogers.com?subject=Websites/Wordpress"
                class="icon white wrapped"
            >
                <FaGlobe />
                <span class="shadow">Websites / Wordpress</span>
            </a>
            <a
                href="mailto:info@ianhogers.com?subject=Mobile Apps"
                class="icon white wrapped"
            >
                <FaMobileAlt />
                <span class="shadow">Mobile Apps</span>
            </a>
            <a
                href="mailto:info@ianhogers.com?subject=Automated Trading Integrations"
                class="icon white wrapped"
            >
                <FaChartBar />
                <span class="shadow"
                    >Automated Trading Integrations</span
                >
            </a>
            <a
                href="mailto:info@ianhogers.com?subject=Game Development"
                class="icon white wrapped"
            >
                <FaGamepad />
                <span class="shadow">Game Development</span>
            </a>
        </div>

        <div class="inflex">
            <div class="icon">
                <MdBuild />
            </div>

            <p>
                My website is undergoing some renovations. But it
                should be back up soon!
            </p>
        </div>

        <p class="callout">
            In the mean time you can reach me through here:
        </p>

        <div class="buttons">
            <a href="mailto:info@ianhogers.com" class="shadow button"
                >contact
                <div class="icon"><MdMail /></div>
            </a>
            <a
                href="http://eepurl.com/g8bgN1"
                class="shadow button yellow"
                target="_blank"
                rel="noreferrer"
                >Mailing List
                <div class="icon">
                    <FaExternalLinkAlt />
                </div>
            </a>
        </div>

        <a
            href="https://3commas.io/?utm_source=referral&utm_medium=cabinet&c=tc596185"
            target="_blank"
            class="icon white robot"
        >
            <FaRobot />
        </a>
    </div>
</div>

<style lang="scss">
    $green: #68b887;
    .buttons {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .shadow {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .button {
        text-transform: uppercase;
        letter-spacing: 0.2em;
        background-color: $green;
        margin-top: 8px;
        padding: 8px 16px;
        border-radius: 6px;
        text-decoration: none;
        color: white;

        display: inline-flex;
        align-items: center;
        gap: 10px;

        .icon {
            display: inline-block;
            color: white;
            width: 25px;
            height: 25px;
        }

        &.yellow {
            background-color: #ceb850;
        }
    }

    .inflex {
        display: inline-flex;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
    }

    .wrapper {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-height: 768px),
            screen and (max-width: 768px) {
            padding-top: 40px;
            padding-bottom: 120px;
            height: auto;
            align-items: flex-start;
        }

        @media screen and (max-width: 768px) {
            padding-left: 40px;
            padding-right: 40px;
        }
    }

    .content {
        max-width: 600px;
    }

    .container {
        display: grid;
        grid-template-columns: 250px 1fr;
        align-items: flex-end;

        gap: 20px;
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            grid-template-columns: 125px 1fr;
        }

        @media screen and (max-width: 550px) {
            grid-template-columns: 1fr;
            justify-items: center;
        }
    }

    img {
        border-radius: 10px;
        @media screen and (max-width: 768px) {
            width: 125px;
            height: 125px;
        }
        @media screen and (max-width: 550px) {
            width: 200px;
            height: 200px;
        }
    }

    h1 {
        position: relative;
        font-size: 1.6rem;
        padding-bottom: 16px;
        flex-grow: 1;

        &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 8px;
            width: 100%;
            background-color: $green;
            border-radius: 4px;
        }
    }

    h2 {
        text-align: center;
        margin-bottom: 10px;
        @media screen and (max-width: 768px) {
            font-size: 1.3rem;
        }
    }

    p {
        margin: 20px 0;
        font-size: 1rem;
        &.callout {
            text-align: center;
        }
    }

    .icon {
        width: 40px;
        height: 40px;
        color: $green;
        display: block;

        &.robot {
            width: 30px;
            height: 30px;
            margin: 0 auto;
            margin-top: 120px;
        }

        &.white {
            color: white;
        }

        &.wrapped {
            position: relative;
            background-color: #111;
            border-radius: 10px;
            padding: 10px;
            width: 60px;
            height: 60px;
            &:hover {
                span {
                    opacity: 1;
                }
            }
            span {
                opacity: 0;
                width: 120px;
                display: block;
                text-align: center;
                position: absolute;
                left: 50%;
                transform: translate(-50%, 0);
                top: 110%;
                background-color: #111;
                border-radius: 5px;
                padding: 10px;
            }
        }
    }
</style>
