import { IMAGE_eatviewLogo } from "$lib/assets/images";
import { Tags, type Project } from "$lib/data/projects/projects";

// import eatviewPageContent from "./Eatview ad20323de76f492eabaeebb1373fbb6e.md?raw";

export const EATVIEW_PROJECT: Project = {
    name: "EatView",
    nav_title: "eatview",
    logo: IMAGE_eatviewLogo,
    page_content: "eatviewPageContent",
    tags: [Tags.Lifestyle, Tags.In_App_Purchases, Tags.Cloud_Storage],
};
