import desc from "./style.module.scss";
import { pageDescriptionProps } from "./type";
import { BasicIcons } from "@/assets/icons";

const PageDescription = ({ sources }: pageDescriptionProps) => {
  return (
    <div className={desc.container}>
      <div className={desc.srcWrapper}>
        {sources.map((source, index) => (
          <div key={source} className={desc.src}>
            <p
              style={{
                color:
                  index === sources.length - 1 ? "black" : "rgba(0, 0, 0, 0.4)"
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
      <div className={desc.desc}>
        파라미터를 설정하여 측정한 신호를 진단에 적절한 형태로 변환시킬 수
        있습니다.
      </div>
    </div>
  );
};
export default PageDescription;
