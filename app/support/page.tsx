import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nous contacter"
        description="Notre équipe d'assistance vous répondra dès que possible par e-mail."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
