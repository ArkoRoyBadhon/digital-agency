import Image from "next/image";
import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <div className={`${styles.hero_section}`}>
      <div className="">
        <h1 className={`${styles.main_heading}`}>
          Building digital products, brands & experience
        </h1>
        <p className={`${styles.banner_description}`}>
          Digital Agency is your online team mangement tool that easy and prompt
        </p>
        <button className={`${styles.banner_btn}`}>Contact Us</button>
      </div>
      <div className="text">
        <Image
          className={styles.heroImg}
          src="/images/business-people-discussing-business-idea.png"
          alt=""
          // height={450}
          // width={450}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default HeroSection;
