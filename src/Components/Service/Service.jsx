/* eslint-disable react/prop-types */
import "./Service.scss";

const ServiceItem = ({ title, description, bgColor, imgSrc, iconBg }) => (
  <div className="col-md-6 col-lg-3">
    <div className="service" style={{ backgroundColor: bgColor }}>
      <div className="icon" style={{ backgroundColor: iconBg }}>
        <img width={40} src={imgSrc} alt="" />
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  </div>
);

export const Service = () => {
  const services = [
    {
      title: "Amazing Deals",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
      bgColor: "#F5EBEB",
      imgSrc: "/handshake.png",
      iconBg: "#CB9696"
    },
    {
      title: "Quality Furniture",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
      bgColor: "#DCEBDD",
      imgSrc: "/kitchen.png",
      iconBg: "#8BBD8E"
    },
    {
      title: "Modern Design",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
      bgColor: "#F5EFD8",
      imgSrc: "/lamp.png",
      iconBg: "#D1B54A"
    },
    {
      title: "Best Support",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
      bgColor: "#F4E6D8",
      imgSrc: "/customer-support.png",
      iconBg: "#D29A61"
    },
  ];

  return (
    <section className="service-section">
      <div className="container-fluid">
        <div className="row g-2 px-0 py-2">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
