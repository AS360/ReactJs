import "./about.css";
import image from "./cover.webp"

const AboutSection = () => {
  return (
    <>
    <section>
      <img className="cover" src={image} alt="image" />
      <div className="content">HOME PAGE</div>
    </section>
    </>
  );
};

export default AboutSection;
