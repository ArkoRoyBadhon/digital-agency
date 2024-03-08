import { footerLinks } from "@/utils/mocks/page";
import styles from "./footer.module.css";
import Link from "next/link";

const FooterSection = () => {
  return (
    <div className={styles.footer_section}>
      <div className={styles.footer_layout}>
        {footerLinks &&
          footerLinks?.map((item) => {
            return (
              <div key={item?.header} className="">
                <p className={styles.main_category}>{item?.header}</p>
                <div className={styles.footerLink}>
                  {item?.links.map((allLink) => {
                    return (
                      <Link key={allLink?.name} href={allLink?.link} className={styles.link}>
                        {allLink?.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.copyright}>
        © Matheus. Todos os direitos reservados
      </div>
    </div>
  );
};

export default FooterSection;
