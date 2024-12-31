/* active icons */
import activeChart from "@/assets/icons/nav/active/chart.svg";
import activeDocs from "@/assets/icons/nav/active/docs.svg";
import activeSetting from "@/assets/icons/nav/active/setting.svg";
/* default icons */
import alert from "@/assets/icons/nav/inactive/alert.svg";
import category from "@/assets/icons/nav/inactive/category.svg";
import chart from "@/assets/icons/nav/inactive/chart.svg";
import docs from "@/assets/icons/nav/inactive/docs.svg";
import hamburg from "@/assets/icons/nav/inactive/hamburg.svg";
import setting from "@/assets/icons/nav/inactive/setting.svg";

export type NavIconsType = {
  active: { [key: string]: string };
  inactive: { [key: string]: string };
};

export const NavIcons: NavIconsType = {
  active: {
    chart: activeChart,
    docs: activeDocs,
    setting: activeSetting

  },
  inactive: {
    alert: alert,
    category: category,
    chart: chart,
    docs: docs,
    hamburg: hamburg,
    setting: setting
  }
};