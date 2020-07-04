import React from "react";
import "./styles.css";
import useAxios from "./useAxios";

export default function App() {
  const { loading, data, error, refetch } = useAxios({
    url:
      "https://api.themoviedb.org/3/movie/550?api_key=16597985cead8798aa58e936b4770e09",
  });
  console.log(
    `loading : ${loading}\ndata : ${JSON.stringify(data)}\nerror : ${error}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}
