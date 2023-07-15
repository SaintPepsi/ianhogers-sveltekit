export enum Tags {
    Android = "Android",
    iOs = "iOS",
    Lifestyle = "Lifestyle",
    In_App_Purchases = "In-App Purchases",
    Shopify = "Shopify",
    Svelte = "Svelte",
    Mobile_Apps = "Mobile Apps",
    Wordpress = "Wordpress",
    React = "React",
    Client = "Client",
    Cross_Play = "Cross-play",
    Leaderboard = "Leaderboard",
    HTML = "HTML",
    JavaScript = "JavaScript",
    Liquid = "Liquid",
    SCSS = "SCSS",
    CSS = "CSS",
    Design = "Design",
    PHP = "PHP",
    Woocommerce = "Woocommerce",
    Stripe = "Stripe",
    Cloud_Storage = "Cloud Storage",
    Desktop = "Desktop",
    Maintenance = "Maintenance",
    Security = "Security",
    Bug_Fixes = "Bug Fixes",
    Performance_Improvements = "Performance Improvements",
    Security_Recommendations = "Security Recommendations",
    Hacked_Sites = "Hacked Sites",
}

export interface ProjectData {
    name: string;
    full_name?: string;
    nav_title: string;
    logo: {
        src: Object[];
        alt: string;
    };
    page_content: string;
    tags: Tags[];
}
