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
            Ecommerce development empowers the creation of captivating online shopping experiences. As an ecommerce developer, I specialize in building visually appealing and user-friendly online stores that drive sales. By leveraging modern platforms and optimizing product listings, I create seamless and enticing shopping experiences that engage customers and encourage purchases. My focus is on delivering ecommerce solutions that prioritize user experience and maximize conversion rates.
        `,
        route: "/projects?solution=ecommerce",
    },
    websites: {
        Icon: SolarMonitorSmartphoneBoldDuotone,
        title: "Websites",
        body: `
            Building a strong online presence is vital. As a web developer, I create captivating websites that showcase brands, engage visitors, and enhance their digital presence. Through innovative design and SEO optimization, I ensure businesses are easily discovered and leave a lasting impression online.
        `,
        route: "/projects?solution=websites",
    },
    apps: {
        Icon: SolarBoxMinimalisticBoldDuotone,
        title: "Mobile/Web Apps",
        body: `
            Mobile and web applications offer captivating and engaging experiences across different platforms. As a developer specializing in these areas, I have the opportunity to create immersive and interactive experiences that captivate users on their mobile devices and web browsers. Whether it's through feature-rich mobile applications or seamless web experiences, I strive to build strong user engagement and satisfaction. By leveraging the latest technologies and focusing on intuitive design, I ensure that users are captivated and delighted throughout their interactions with the applications I develop.
        `,
        route: "/projects?solution=apps",
    },
    games: {
        Icon: SolarGamepadBoldDuotone,
        title: "Game Development",
        body: `
        Games are a powerful medium that create captivating and engaging experiences in various forms, including mobile games, browser games, desktop games, branded games, and more. Through my work as a game developer, I have the opportunity to build strong brand loyalty for your projects. By providing portable entertainment, instant accessibility, and enhanced graphics, I am dedicated to ensuring that players are captivated and challenged throughout their gaming journeys.
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
