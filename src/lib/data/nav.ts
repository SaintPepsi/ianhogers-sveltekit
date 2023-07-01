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
                title: "e-Commerce",
                route: "/solutions/e-commerce",
            },
            websites: {
                title: "Websites",
                route: "/solutions/websites",
            },
            apps: {
                title: "Apps",
                route: "/solutions/apps",
            },
            games: {
                title: "Games",
                route: "/solutions/games",
            },
        },
    },
};
