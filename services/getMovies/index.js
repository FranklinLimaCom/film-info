import api from "../api";

function getMovies(title) {
  return api
    .get(`/movies/search/?Title=${title}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}

export default getMovies;
