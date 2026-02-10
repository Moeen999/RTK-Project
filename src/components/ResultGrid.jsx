import { useEffect } from "react";
import { getPhotos, getVideos } from "../api/mediaApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    const getData = async () => {
      try {
        if (!query) return <h1>Enter a query...</h1>;
        dispatch(setLoading());
        let data = [];
        if (activeTab === "photos") {
          let res = await getPhotos(query);
          data = res.results.map((item) => ({
            //todo: Normalize API response
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }
        if (activeTab === "videos") {
          let res = await getVideos(query);
          data = res.videos.map((item) => ({
            id: item.id,
            type: "video",
            item: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
          }));
        }
        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error));
      }
    };
    getData();
  }, [activeTab, query]);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div className="w-full grid grid-cols-1 px-3 md:grid-cols-4 gap-6 place-items-center h-auto  ">
      {results?.map((item, index) => {
        return (
          <div key={index}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
