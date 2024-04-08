"use client";

import { useQuery } from "react-query";
import { FilmsService } from "../services/FilmsService";
import { useState } from "react";
import { useDebounce } from "../components/useDebounce";

export function useFilms() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const debouncedSearchKeyword = useDebounce(searchKeyword, 300);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(
    [
      FilmsService.GET_ALL_FILMS,
      {
        page: page,
        size: 10,
        searchKeyword: debouncedSearchKeyword,
      },
    ],
    () => {
      return FilmsService.getAllFilms({
        page: page,
        size: 10,
        searchKeyword: debouncedSearchKeyword,
      });
    }
  );

  console.log(data, "=====>");

  return {
    data,
    isLoading,
    setSearchKeyword,
    setPage,
  };
}
