import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Navbar from "../navbar/navbar";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/action/action";
import Footer from "../Footer/Footer";
import Spinner from "react-bootstrap/Spinner";
export const Home = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const send = (show) => {
    dispatch(ADD(show));
  };
  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setShows(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShows();
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <span className=" d-flex justify-content-center mt-5 ">
          <Spinner animation="grow" variant="dark" className="p-5" />
        </span>
      ) : (
        <div className="container">
          {shows.map((show) => {
            return (
              <>
                <div className="card">
                  <img
                    src={show.show.image?.medium}
                    alt="Card Image"
                    className="card-image"
                  />
                  <div className="card-content">
                    <h2 className="card-title">{show.show.name}</h2>
                    <h5>Rating: {show.show.rating.average} 🌟🌟🌟</h5>
                    <div className="cardbutton">
                      <Link to={`/detail/${show.show.name}`}>
                        <Button
                          variant="outline-warning"
                          className="p-2"
                          onClick={() => send(show)}
                        >
                          Detail
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
      <Footer />
    </>
  );
};
export default Home;
