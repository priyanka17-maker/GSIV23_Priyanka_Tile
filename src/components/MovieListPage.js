

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MovieSearchBar from "./MovieSearchBar";
import PageHeader from "../common/PageHeader";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const MovieListPage = () => {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    console.log("SearchData>>", query);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDhhNDY0NjA0Zjc5MzE3NjljOWQ5NjRkMDBlYmU2NiIsInN1YiI6IjY0ZGIzZWY5YmYzMWYyMDFjYThlMDljYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gS535dlYL7a1HdMl6Vdja8rgH-Be1CCs045eFntnhY",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );

    if (response.ok) {
      const data = await response.json();
      setSearchResults(data.results);
    }
  };

  const fetchMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDhhNDY0NjA0Zjc5MzE3NjljOWQ5NjRkMDBlYmU2NiIsInN1YiI6IjY0ZGIzZWY5YmYzMWYyMDFjYThlMDljYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gS535dlYL7a1HdMl6Vdja8rgH-Be1CCs045eFntnhY",
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );

    if (response.ok) {
      const data = await response.json();
      setMovies(data.results);
    }
  };

  useEffect(() => {
    // Fetch trending movies from the API
    fetchMovies();
  }, []);

  const handleHomeClick = () => {
    history.push("/");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <PageHeader onHomeClick={handleHomeClick}><MovieSearchBar onSearch={handleSearch} /></PageHeader>
      <div style={{ flex: 1, overflowY: "auto" }}>
      <Grid container spacing={3} style={{ padding: "1.5rem" }}>
        {(searchResults.length > 0 ? searchResults : movies).map((movie) => (
          <Grid item key={movie.id}  xs={12}
          sm={6}
          md={3}
          lg={4}
          xl={2}
         
          >
            <Card sx={{ maxWidth: 300, minHeight: 500 }}>
              <CardMedia
                component="img"
                alt={movie.title}
                height="100%"
                width="100%"
                style={{ objectFit: "contain" }} // Ensures the whole image is visible
                image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              />

              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    style={{
                      color: "#4a4a4a",
                      textAlign: "initial",
                      lineHeight: "1.3rem",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {movie.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{
                      color: "#9b9b9b",
                      textAlign: "initial",
                      lineHeight: "1.3rem",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {movie && movie.vote_average
                      ? movie.vote_average.toPrecision(2)
                      : ""}
                  </Typography>
                </div>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#9b9b9b",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    textAlign: "initial",
                    fontSize: "0.7rem",
                    fontWeight: "600",
                  }}
                >
                  Description: {movie.overview}
                </Typography>
                <Link
                  to={`/movie/${movie.id}`} // Navigate to the movie details page
                  style={{ textDecoration: "underline" }}
                >
                  <Button
                    variant="text"
                    color="primary"
                    style={{ textDecoration: "underline" }}
                  >
                    See More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </div>
   </div>
  );
};

export default MovieListPage;
