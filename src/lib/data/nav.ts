/**********************************************************************************************************
 *   CONSTS
 **********************************************************************************************************/
import SolarCartLarge2BoldDuotone from "~icons/solar/cart-large-2-bold-duotone";
import SolarBoxMinimalisticBoldDuotone from "~icons/solar/box-minimalistic-bold-duotone";
import SolarMonitorSmartphoneBoldDuotone from "~icons/solar/monitor-smartphone-bold-duotone";
import SolarGamepadBoldDuotone from "~icons/solar/gamepad-bold-duotone";

export const routes = {
    home: {
        title: "Home",
        route: "/",
    },
    contact: {
        title: "Contact",
        route: "/contact",
    },
    about: {
        title: "About",
        route: "/about",
    },
    projects: {
        title: "Projects",
        route: "/projects",
    },
    solutions: {
        title: "Solutions",
        route: "/solutions",
        subRoutes: {
            ecommerce: {
                title: "Ecommerce",
                route: "/solutions/ecommerce",
                Icon: SolarCartLarge2BoldDuotone,
            },
            websites: {
                title: "Websites",
                route: "/solutions/websites",
                Icon: SolarMonitorSmartphoneBoldDuotone,
            },
            apps: {
                title: "Apps",
                route: "/solutions/apps",
                Icon: SolarBoxMinimalisticBoldDuotone,
            },
            games: {
                title: "Games",
                route: "/solutions/games",
                Icon: SolarGamepadBoldDuotone,
            },
        },
    },
};
