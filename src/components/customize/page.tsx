import Image from "next/image";
import styles from "./customize.module.css";
import { ArrowIcon } from "@/utils/icons/arrowIcon";


const CustomizeSection = () => {
  return (
    <div className={`${styles.customize_section}`}>
      <div className="div_center_both">
        <h1 className={`${styles.customize_heading}`}>
          Custome & Plugin Development
        </h1>
        <p className={`${styles.customize_description}`}>
          Commonly used in the graphic, print & publishing industris for
          previewing visual layout and mockups
        </p>
        <div className="arrow">
          <ArrowIcon />
        </div>
      </div>
      <div className="text">
        <Image
          className={styles.customizeImg}
          src="/images/businessman-analyzing-data.png"
          alt=""
          height={450}
          width={450}
        />
      </div>
    </div>
  );
};

export default CustomizeSection;
