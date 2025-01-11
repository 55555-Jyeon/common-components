import header from "./style.module.scss";

const Header = (): JSX.Element => {
    return (
        <div className={header.container}>
            <div className={header.logo}>LOGO</div>
            <h3>MCC ZIP</h3>
            <div className={header.iconWrapper}>
                <div>menu</div>
                <div>user</div>
            </div>
        </div>
    );
};
export default Header;
