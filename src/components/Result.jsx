import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";

import Loading from "./Loading";

const Result = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  useEffect(() => {
    getResults("/search/q=facebook&num=40");
  }, []);
  const location = useLocation();
  console.log(results);
  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.results?.map(({ link, title, description }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                  {title}
                </p>
                <p className="text-lg hover:underline dark:text-white-300 text-black-700  ">
                  {description}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
      break;
    case "/news":
      return "videos";
      break;
    case "/videos":
      return "videos";
      break;
    case "/images":
      return "images";
      break;

    default:
      return "Error";
      break;
  }
  return <div>result</div>;
};
export default Result;
