import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import layout from "./style.module.scss";

const Layout = (): JSX.Element => {
    return (
        <div className={layout.container}>
            <Header />
            <main className={layout.contents}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
