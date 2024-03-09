import Image from "next/image";
import styles from "./customize.module.css";
import { ArrowIcon } from "@/utils/icons/arrowIcon";

const CustomizeSection = () => {
  return (
    <section className={`${styles.customize_section}`}>
      <div className="div_center_both">
        <h1 className="section_heading">Custome & Plugin Development</h1>
        <p className="section_description">
          Commonly used in the graphic, print & publishing industris for
          previewing visual layout and <br /> mockups
        </p>
        <button className="arrow">
          <ArrowIcon />
        </button>
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
    </section>
  );
};

export default CustomizeSection;
