import { NavIcons } from "@/assets/icons/nav/NavIcons";
import { type MenuListType } from "./type";

export const MENU_LIST: MenuListType[] = [
    {
        key: "dashboard",
        icon: NavIcons.inactive.category,
        activeIcon: NavIcons.inactive.category, // 아이콘을 못 찾음
        alt: "대시보드",
        path: "/",
    },
    {
        key: "valveHistory",
        icon: NavIcons.inactive.docs,
        activeIcon: NavIcons.active.docs,
        alt: "밸브 가동 내역",
        path: "/valveHistory",
    },
    {
        key: "valve",
        icon: NavIcons.inactive.chart,
        activeIcon: NavIcons.active.chart,
        alt: "밸브 정보",
        path: "/valve",
    },
    {
        key: "settings",
        icon: NavIcons.inactive.setting,
        activeIcon: NavIcons.active.setting,
        alt: "진단 장비 관리",
        path: "/settings",
    },
];
