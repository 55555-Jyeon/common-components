import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import nav from "./style.module.scss";
import { NavIcons } from "@/assets/icons/nav/NavIcons";
import { MENU_LIST } from "@/constant/menu-list";

const SideNavbar = (): JSX.Element => {
    const [selectedMenu, setSelectedMenu] = useState<string>("category");

    const location = useLocation();

    useEffect(() => {
        const currentMenu = MENU_LIST.find(
            (menu) => menu.path === location.pathname
        );
        if (currentMenu) {
            setSelectedMenu(currentMenu.key);
        }
    }, [location.pathname]);

    return (
        <div className={nav.container}>
            <div className={nav.upper}>
                <img
                    className={nav.icon}
                    src={NavIcons.inactive.hamburg}
                    alt="전체 메뉴 보기"
                />
                <img
                    className={nav.icon}
                    src={NavIcons.inactive.alert}
                    alt="알림 확인하기"
                />
            </div>
            <div className={nav.lower}>
                {MENU_LIST.map((menu) => {
                    const isSelected = selectedMenu === menu.key;
                    return (
                        <div
                            className={clsx(
                                nav.menu,
                                isSelected && nav.selected
                            )}
                            key={menu.key}
                            onClick={() => setSelectedMenu(menu.key)}
                        >
                            <Link to={menu.path}>
                                <img
                                    className={nav.icon}
                                    src={
                                        isSelected ? menu.activeIcon : menu.icon
                                    }
                                    alt={menu.alt}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default SideNavbar;
