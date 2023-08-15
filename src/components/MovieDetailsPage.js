
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Typography, Card, CardMedia } from "@mui/material";
import PageHeader from "../common/PageHeader";

const MovieDetailsPage = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const history = useHistory();

  const fetchMovieDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.movieId}?api_key=fd8a464604f7931769c9d964d00ebe66`
    );
    const data = await response.json();
    setMovieDetails(data);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [match.params.movieId]);

  const handleHomeClick = () => {
    history.push("/");
  };

  return (
    <>
      <PageHeader onHomeClick={handleHomeClick}>
        <span style={{ fontWeight: "700" }}>Movie Details</span>
      </PageHeader>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          padding: "1.5rem",
        }}
      >
        <div style={{ flex: "0 0 170px", marginRight: "1.5rem" }}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              alt={movieDetails.title}
              height="auto"
              style={{ width: "100%", objectFit: "contain" }}
              image={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            />
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6" style={{ fontWeight: "600" }}>
            {movieDetails.title} (
            {movieDetails && movieDetails.vote_average
              ? movieDetails.vote_average.toPrecision(2)
              : ""}
            )
          </Typography>
          <Typography style={{ fontSize: "0.8rem", color: "#4a4a4a" }}>
            Release Year: {movieDetails.release_date}
          </Typography>
          <Typography style={{ fontSize: "0.8rem", color: "#4a4a4a" }}>
            Length: {movieDetails.runtime} minutes
          </Typography>
          <Typography style={{ fontSize: "0.8rem", color: "#4a4a4a" }}>
            Cast: {movieDetails.cast}
          </Typography>
          <Typography
            style={{
              textAlign: "initial",
              fontSize: "0.8rem",
              color: "#4a4a4a",
            }}
          >
            Description: {movieDetails.overview}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
