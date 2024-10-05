import React from "react";

import "../assets/css/steps.css";

const Steps = () => {
  return (
    <section id="steps">
      <div className="container">
        <div className="container-title">Steps for complition</div>
        <div className="steps-container">
          <div className="step-1-div step-div">
            <span className="step-div-label">Step 1</span>
            <img src="/images/plan-1.png" alt="" className="step-div-icon" />
            <div className="step-div-title">Body Title</div>
            <div className="step-div-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam possimus fugiat facere beatae dignissimos a voluptatem
              voluptates sequi sed odit.
            </div>
          </div>
          <div className="step-2-div step-div">
            <span className="step-div-label">Step 2</span>
            <img src="/images/plan-2.png" alt="" className="step-div-icon" />
            <div className="step-div-title">Body Title</div>
            <div className="step-div-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam possimus fugiat facere beatae dignissimos a voluptatem
              voluptates sequi sed odit.
            </div>
            <button className="step-div-btn">Start Now !</button>
          </div>
          <div className="step-3-div step-div">
            <span className="step-div-label">Step 3</span>
            <img src="/images/plan-3.png" alt="" className="step-div-icon" />
            <div className="step-div-title">Body Title</div>
            <div className="step-div-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam possimus fugiat facere beatae dignissimos a voluptatem
              voluptates sequi sed odit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
