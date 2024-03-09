import Image from "next/image";
import styles from "./branding.module.css";
import { ArrowIcon } from "@/utils/icons/arrowIcon";

const BrandingSection = () => {
  return (
    <section className={`${styles.branding_section}`}>
      <div className="div_center_both">
        <h1 className="section_heading">Branding & Design system</h1>
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
          className={styles.brandImg}
          src="/images/designer-team-working-on-creative-design.png"
          alt=""
          height={450}
          width={450}
        />
      </div>
    </section>
  );
};

export default BrandingSection;
