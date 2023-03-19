import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

const apiKey = "0c3b5bdc594113fd74bd533ce2f43aa0";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";

const Card = ({ img }) => {
  return (
    <div>
      <img className="card" src={img} alt="" />
    </div>
  );
};

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => {
          return <Card key={index} img={`${imgUrl}${item.poster_path}`} />;
        })}
      </div>
    </div>
  );
};

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
      console.log(upcomingMovies);
    };
    fetchUpcoming();
  }, []);
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Popular on Netflix"} arr={upcomingMovies} />
      <Row title={"Movies"} />
      <Row title={"TV Shows"} />
      <Row title={"Recently Viewed"} />
      <Row title={"MY List"} />
    </section>
  );
};

export default Home;
