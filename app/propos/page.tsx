import AboutSectionOne from "@/components/propos/AboutSectionOne";
import AboutSectionTwo from "@/components/propos/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="A propos"
        description=""
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
