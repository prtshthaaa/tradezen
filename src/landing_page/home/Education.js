import './css/education.css';

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6 ps-md-5">
          <h3 className="fw-semibold mb-3">
            Free and open market education
          </h3>

          <p className="mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="edu-link d-inline-block mb-4">
            Explore Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mb-3">
            TradingQ&A, the most active trading and investment community
            in India for all your market related doubts.
          </p>

          <a href="#" className="edu-link d-inline-block">
            Visit TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;
