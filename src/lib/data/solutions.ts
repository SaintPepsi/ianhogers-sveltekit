/**********************************************************************************************************
 *   BASE IMPORT
 **********************************************************************************************************/
/********** Icons **********/
import SolarCartLarge2BoldDuotone from "~icons/solar/cart-large-2-bold-duotone";
import SolarMonitorSmartphoneBoldDuotone from "~icons/solar/monitor-smartphone-bold-duotone";
import SolarBoxMinimalisticBoldDuotone from "~icons/solar/box-minimalistic-bold-duotone";
import SolarGamepadBoldDuotone from "~icons/solar/gamepad-bold-duotone";

export const SOLUTIONS = {
    ecommerce: {
        Icon: SolarCartLarge2BoldDuotone,
        title: "Ecommerce",
        body: `
            Effortlessly sell products or services
            online by leveraging the power of Shopify.
            Seamlessly embark on your online store
            journey, maximizing its potential and
            ensuring a smooth selling experience.
        `,
        route: "/projects?solution=ecommerce",
    },
    websites: {
        Icon: SolarMonitorSmartphoneBoldDuotone,
        title: "Web Development",
        body: `
            Piece about web development
        `,
        route: "/projects?solution=websites",
    },
    apps: {
        Icon: SolarBoxMinimalisticBoldDuotone,
        title: "App Development",
        body: `
            Piece about App development
        `,
        route: "/projects?solution=apps",
    },
    games: {
        Icon: SolarGamepadBoldDuotone,
        title: "Games Development",
        body: `
            Piece about Game development
        `,
        route: "/projects?solution=games",
    },
};

export const SOLUTIONS_LIST = [
    SOLUTIONS.ecommerce,
    SOLUTIONS.websites,
    SOLUTIONS.apps,
    SOLUTIONS.games,
];
