import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import SideNavbar from "./navigation/page";
import layout from "./style.module.scss";
import PageDescription from "./description/page";

const Layout = (): JSX.Element => {
    return (
        <div className={layout.container}>
            <Header />
            <main className={layout.contents}>
                <SideNavbar />
                <div className={layout.outlet}>
                    <PageDescription
                        sources={["one depth", "two depth", "three depth"]}
                        desc="페이지에 대한 설명을 적을 수 있습니다."
                    />
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
