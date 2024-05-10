import { SubMenuItem } from "./SubMenuItem";

export interface MenuItem {
    label: string;
    link: string;
    subMenu: SubMenuItem[];
}