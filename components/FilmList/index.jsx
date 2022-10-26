import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import getMovies from "../../services/getMovies";
import SearchBar from "../SearchBar";
import FilmCard from "./components/FilmCard";

function FilmList() {
  const [title, setTitle] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies(title).then((movies) => setMovieList(movies.data));
  }, [title]);

  return (
    <Container>
      <SearchBar onChange={(title) => setTitle(title)} />
      <Grid sx={{ mt: 1 }} container spacing={3}>
        {movieList.map((movie) => (
          <Grid key={movie.imdbID} item md={4} sm={6} xs={12}>
            <FilmCard title={movie.Title} year={movie.Year} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default FilmList;
