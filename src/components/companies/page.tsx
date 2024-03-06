import { companyLogo } from "@/mocks/page";
import styles from "./companies.module.css";
import Image from "next/image";

const Companies = () => {
  return (
    <div className={`${styles.companies_section}`}>
      <div className="pos_center_div">
        <span className={`${styles.companies_title}`}>
          Trusted by 4,000+ companies
        </span>
      </div>
      <div className="pos_center_div">
        <div className={`${styles.body_box}`}>
          {companyLogo &&
            companyLogo.map((item) => {
              return (
                <div key={item?.name} className="">
                  <Image
                  className={styles.logo_img}
                    src={item?.logo}
                    alt={item?.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    // style={{ width: "100%", height: "48px" }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Companies;
