import { footerLinks, footerSocialData } from "@/utils/mocks";
import styles from "./footer.module.css";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className={styles.footer_section}>
      <div className={styles.footer_body}>
        <div className={styles.footer_logo}>
          <p className={styles.main_logo}>Digital Agency</p>
          <p className={styles.footer_type}>
            Building digital products, brands & experience
          </p>
        </div>
        <div className={styles.footer_layout}>
          {footerLinks &&
            footerLinks?.map((item) => {
              return (
                <div key={item?.header} className="">
                  <p className={styles.main_category}>{item?.header}</p>
                  <div className={styles.footerLink}>
                    {item?.links.map((allLink) => {
                      return (
                        <Link
                          key={allLink?.name}
                          href={allLink?.link}
                          className={styles.link}
                        >
                          {allLink?.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          {footerSocialData && (
            <div key={footerSocialData?.header} className={styles.postion_menu}>
              <p className={styles.main_category}>{footerSocialData?.header}</p>
              <div className={styles.footerLink}>
                {footerSocialData?.links.map((allLink) => {
                  return (
                    <Link
                      key={allLink?.name}
                      href={allLink?.link}
                      className={styles.link}
                    >
                      {allLink?.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.copyright}>
        © Matheus. Todos os direitos reservados
      </div>
    </footer>
  );
};

export default FooterSection;
