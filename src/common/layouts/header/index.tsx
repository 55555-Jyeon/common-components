import React from "react";
import styles from "./style.module.scss";

const Header = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>LOGO</div>
            <h3>MCC ZIP</h3>
            <div className={styles.iconWrapper}>
                <div>menu</div>
                <div>user</div>
            </div>
        </div>
    );
};
export default Header;
