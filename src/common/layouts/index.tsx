import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import SideNavbar from "./navigation/page";
import layout from "./style.module.scss";

const Layout = (): JSX.Element => {
    return (
        <div className={layout.container}>
            <Header />
            <main className={layout.contents}>
                <SideNavbar />
                <div className={layout.outlet}>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
