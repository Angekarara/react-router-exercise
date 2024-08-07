import { Link } from "react-router-dom";
function About() {
  return (
    <div className="p-5">
      <img src="./image/image 54.png " alt="" />
      <div className="about-page-content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <div className="mt-5">
        <Link className="bg-[#252525] p-4 text-white" to="/vans">
          Explore our vans
        </Link></div>
      </div>
    </div>
  );
}
export default About;
