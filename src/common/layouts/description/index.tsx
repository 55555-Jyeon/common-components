import styles from "./style.module.scss";
import { type pageDescriptionProps } from "./type";
import { BasicIcons } from "@/assets/icons";

const PageDescription = ({
    sources,
    desc,
}: pageDescriptionProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.srcWrapper}>
                {sources.map((source, index) => (
                    <div key={source} className={styles.src}>
                        <p
                            style={{
                                color:
                                    index === sources.length - 1
                                        ? "black"
                                        : "rgba(0, 0, 0, 0.4)",
                            }}
                        >
                            {source}
                        </p>
                        {index < sources.length - 1 && (
                            <img src={BasicIcons.arrow.right} alt="chevron" />
                        )}
                    </div>
                ))}
            </div>
            {desc !== null && <div className={styles.desc}>{desc}</div>}
        </div>
    );
};
export default PageDescription;
