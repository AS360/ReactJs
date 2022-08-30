import "./Contactus.css";
import image from "./cover.webp";

const Contactus = () => {
  return (
    <>
      <section>
        <img className="cover" src={image} alt="image" />
        <div className="content">
          <h3>Contact Info</h3>
          <ul>
            <li>Main Location: Block DG, Sector-II, Plot-4, Salt Lake.</li>
            <li>Enrollment Phone: (555) 555-5555</li>
            <li>Student Phone:(333) 333-3333</li>
            <li>Enrollment Email: (555) enroll@frontendbc.test</li>
            <li>Student Email: student@frontendbc.test</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contactus;
