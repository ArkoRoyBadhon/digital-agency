import Image from "next/image";
// import bannerImg

const HeroSection = () => {
  return (
    <div className="hero_section">
      {/* <div className="flex"> */}
      <div className="">
        <h1 className="main_heading">
          Building digital products, brands & experience
        </h1>
        <p className="banner_description">Digital Agency is your online team mangement tool that easy and prompt</p>
        <button className="banner_btn">Contact Us</button>
      </div>
      <div className="text">
        <Image className="" src="/images/business-people-discussing-business-idea.png" alt="" height={450} width={450} />
      </div>
      {/* </div> */}
    </div>
  );
};

export default HeroSection;
