import React from 'react'
import './css/stats.css'
import useScrollReveal from '../scroll';

function Stats() {
  const { ref, inView } = useScrollReveal({ threshold: 0.4 });

  return ( 
    <div ref={ref} className={`container ${inView ? "in-view" : ""}`}>
      <div className="row my-5">

        {/* LEFT CONTENT */}
        <div className={`col-6 my-5 reveal reveal-left ${inView ? "in-view" : ""}`}>
         <h3 className="pb-3 text-light fw-bold">
  Trust with confidence
</h3>

<div className="content-left">

  <h4 className="text-light fw-semibold">
    Customer-first always
  </h4>
  <p className="text-light opacity-75">
    That's why 1.3+ crore customers trust Tradezen with 
    <i className="fa-solid fa-indian-rupee-sign mx-1"></i>
    3.5+ lakh crore worth of equity investments.
  </p>

  <h4 className="text-light fw-semibold">
    NO spam or gimmicks
  </h4>
  <p className="text-light opacity-75">
    No gimmicks, spam, "gamification", or annoying push notifications.
    High quality apps that you use at your pace, the way you like.
  </p>

  <h4 className="text-light fw-semibold">
    The Tradezen universe
  </h4>
  <p className="text-light opacity-75">
    Not just an app, but the whole ecosystem. Our investments in 30+ fintech startups offer
    you tailored services specific to your needs.
  </p>

  <h4 className="text-light fw-semibold">
    Do better with money
  </h4>
  <p className="text-light opacity-75">
    With initiatives like Nudge and Kill Switch, we don't just help you invest,
    but also guide you to make smarter financial decisions.
  </p>

</div>

        </div>

        {/* RIGHT CONTENT */}
        <div className={`col-6 content-right my-5 reveal reveal-right ${inView ? "in-view" : ""}`}>
          <img src="media/images/stats.png" alt="Ecosystem" />

          <div className="text reveal reveal-up">
            <a href="">Explore our products <i className="fa-solid fa-arrow-right"></i></a> &nbsp;
            <a href="">Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
