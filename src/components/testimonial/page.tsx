import Image from "next/image";
import styles from "./testimonial.module.css";
import { testimonialMocks } from "@/mocks/page";

const TestimonialSection = () => {
  return (
    <div className={styles.new}>
      <span className={`${styles.subTitle} pos_center_div`}>TESTIMONIALS</span>
      <div className="pos_center_div">
        <h4 className={`${styles.mainTitle}`}>Read What Other have to Say</h4>
      </div>
      <div className={styles.testimonials}>
        {testimonialMocks &&
          testimonialMocks?.map((item) => {
            return (
              <div key={item?.name} className={styles.testimonialCard}>
                <div className="pos_center_div">
                  <Image
                  className={styles.img}
                    src={item?.img}
                    alt={item?.name}
                    width={129}
                    height={130}
                  />
                </div>
                <p className={styles.name_testimonial}>{item?.name}</p>
                <p className="">{item?.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TestimonialSection;
