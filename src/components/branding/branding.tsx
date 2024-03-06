import Image from "next/image";
import styles from "./branding.module.css";

const BrandingSection = () => {
  return (
    <div className={`${styles.branding_section}`}>
      <div className="div_center_both">
        <h1 className={`${styles.brand_heading}`}>Branding & Design system</h1>
        <p className={`${styles.brand_description}`}>
          Commonly used in the graphic, print & publishing industris for
          previewing visual layout and mockups
        </p>
        <div className="styles.arrow">
          <Image src="/images/Arrow 1.svg" alt="" width={22.23} height={20} />
        </div>
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
    </div>
  );
};

export default BrandingSection;
