import React from "react";
import "./Home.scss";

const Card = ({ img }) => {
  return (
    <div>
      <img className="card" src={img} alt="" />;
    </div>
  );
};

const Row = ({
  title,
  arr = [
    {
      img: "https://images.moviesanywhere.com/6305a9e8ed76d5fa485ac16637655cf7/bcc68be4-eede-409b-a63d-e179b28d19b4.jpg",
    },
  ],
}) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item) => {
          <Card img={item.img} />;
        })}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Popular on Netflix"} />
      <Row title={"Movies"} />
      <Row title={"TV Shows"} />
      <Row title={"Recently Viewed"} />
      <Row title={"MY List"} />
    </section>
  );
};

export default Home;
