import './css/education.css';
import useScrollReveal from '../scroll';

function Education() {
  const { ref, inView } = useScrollReveal({ threshold: 0.4 });

  return (
    <div ref={ref} className={`container py-5 ${inView ? "in-view" : ""}`}>
      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className={`col-md-6 mb-4 mb-md-0 reveal reveal-left ${inView ? "in-view" : ""}`}>
          <img
            src="media/images/education2.svg"
            alt="Education"
            className="img-fluid opacity-75"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={`col-md-6 ps-md-5 reveal reveal-right ${inView ? "in-view" : ""}`}>
          <h3 className="fw-semibold mb-3 text-light">
            Free and open market education
          </h3>

          <p className="mb-3 text-light opacity-75">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="d-inline-block mb-4 text-decoration-none fw-semibold" style={{ color: "#FF5F00" }}>
            Explore Varsity <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>

          <p className="mb-3 text-light opacity-75">
            TradingQ&A, the most active trading and investment community
            in India for all your market related doubts.
          </p>

          <a href="#" className="d-inline-block text-decoration-none fw-semibold" style={{ color: "#FF5F00" }}>
            Visit TradingQ&A <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;
