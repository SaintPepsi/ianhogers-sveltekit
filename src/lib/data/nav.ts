/**********************************************************************************************************
 *   CONSTS
 **********************************************************************************************************/
import { SOLUTIONS } from "./solutions";

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
                Icon: SOLUTIONS.ecommerce.Icon,
            },
            websites: {
                title: "Websites",
                route: "/solutions/websites",
                Icon: SOLUTIONS.websites.Icon,
            },
            apps: {
                title: "Apps",
                route: "/solutions/apps",
                Icon: SOLUTIONS.apps.Icon,
            },
            games: {
                title: "Games",
                route: "/solutions/games",
                Icon: SOLUTIONS.games.Icon,
            },
        },
    },
};
