import { fetcher } from "../utils/fetcher";
import { queryFetcher } from "../utils/queryFeatcher";
const DB_SERVICES = "http://localhost:8080";

export class FilmsService {
  static GET_ALL_FILMS = `${DB_SERVICES}/backend/films-service/allFilms`;
  static GET_FILM_BY_ID = `${DB_SERVICES}/backend/films-service/movie`;
  static UPDATE_FILM = `${DB_SERVICES}/films/:id`;
  static DELETE_FILM = `${DB_SERVICES}/films/:id`;
  static CREATE_FILM = `${DB_SERVICES}/films`;
  static DELETE_FILM_BY_ID = `${DB_SERVICES}/films/:id`;

  static async getAllFilms(payload: {
    page: number;
    size: number;
    searchKeyword: string;
  }) {
    return await queryFetcher({
      method: "GET",
      url: FilmsService.GET_ALL_FILMS,
      params: payload,
    });
  }

  static async getFilmById(payload: { movieId: string }) {
    return await fetcher({
      url: this.GET_FILM_BY_ID,
      method: "GET",
      params: payload,
    });
  }
}
