import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";

import Loading from "./Loading";

const Result = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();

  const location = useLocation();
  if (isLoading) return <Loading />;
  return <div>result</div>;
};
export default Result;
