import { companyLogo, companyLogoMobile } from "@/utils/mocks";
import styles from "./companies.module.css";
import Image from "next/image";

const Companies = () => {
  return (
    <section className={`${styles.companies_section}`}>
      <div className="pos_center_div">
        <span className={`${styles.companies_title}`}>
          Trusted by 4,000+ companies
        </span>
      </div>
      <div className="pos_center_div">
        <div className={`${styles.body_box} ${styles.hidden_pc} `}>
          {companyLogo &&
            companyLogo.map((item,i) => {
              return (
                <div key={i} className="">
                  {item?.logo}
                </div>
              );
            })}
        </div>
        <div className={`${styles.body_box} ${styles.hidden_mobile}`}>
          {companyLogoMobile &&
            companyLogoMobile.map((item,i) => {
              return (
                <div key={i} className="">
                  {item?.logo}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Companies;
