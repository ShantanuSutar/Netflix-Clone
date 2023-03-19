import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

const apiKey = "0c3b5bdc594113fd74bd533ce2f43aa0";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

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
  const [nowPLayingMovies, setNowPLayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };
    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPLayingMovies(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, []);
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPLayingMovies} />
      <Row title={"Popular on Netflix"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
    </section>
  );
};

export default Home;
