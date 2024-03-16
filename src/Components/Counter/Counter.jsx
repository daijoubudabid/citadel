/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useCountUp } from "react-countup";
import "./Counter.scss";

export const Counter = () => {
  const [experienceCount, setExperienceCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [awardsCount, setAwardsCount] = useState(0);

  const { start: startExperience } = useCountUp({
    ref: "experienceCounter",
    end: 20,
    duration: 4,
    enableScrollSpy: true,
    scrollSpyOnce: true,
    scrollSpyDelay: 400,
    useEasing: true,
  });

  const { start: startCustomers } = useCountUp({
    ref: "customersCounter",
    end: 10200,
    duration: 4,
    enableScrollSpy: true,
    scrollSpyOnce: true,
    scrollSpyDelay: 400,
    useEasing: true,
  });

  const { start: startProjects } = useCountUp({
    ref: "projectsCounter",
    end: 9850,
    duration: 4,
    enableScrollSpy: true,
    scrollSpyDelay: 400,
    scrollSpyOnce: true,
    useEasing: true,
  });

  const { start: startAwards } = useCountUp({
    ref: "awardsCounter",
    end: 100,
    duration: 4,
    enableScrollSpy: true,
    scrollSpyOnce: true,
    scrollSpyDelay: 400,
    useEasing: true,
  });

  useEffect(() => {
    startExperience();
    startCustomers();
    startProjects();
    startAwards();
  }, [startExperience, startCustomers, startProjects, startAwards]);

  return (
    <section className="counter-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="title mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true}>
            <span>Great Reviews for our services</span>
            <h2 className="mb-0">Technical Statistics</h2>
          </div>
        </div>
        <div className="row justify-content-center g-2">
          <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true} data-aos-delay="100">
            <div className="counter">
              <h2 id="experienceCounter">{experienceCount}</h2>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true} data-aos-delay="200">
            <div className="counter">
              <h2 id="customersCounter">{customersCount}</h2>
              <p>Satisfied Customers</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true} data-aos-delay="300">
            <div className="counter">
              <h2 id="projectsCounter">{projectsCount}</h2>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true} data-aos-delay="400">
            <div className="counter">
              <h2 id="awardsCounter">{awardsCount}</h2>
              <p>Won Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
