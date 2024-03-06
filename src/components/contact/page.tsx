import Image from "next/image";
import styles from "./contact.module.css";

const ContactSection = () => {
  return (
    <div className={`${styles.contact_section}`}>
      <div className="div_center_both responsiveClass">
        <h1 className={`${styles.contact_heading}`}>
          Be a part of the next big thing
        </h1>
        <p className={`${styles.contact_description}`}>
          We work with Brans, Startups, to SMEs. Colaborate for more impact and
          growt
        </p>
        <button className={`common_btn`}>Contact Us</button>
      </div>
      <div className={styles.contact_img}>
        <Image
          className=""
          src="/images/customer-support.png"
          alt=""
          height={450}
          width={450}
        />
      </div>
    </div>
  );
};

export default ContactSection;
