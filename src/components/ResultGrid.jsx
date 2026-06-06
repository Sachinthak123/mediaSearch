import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/MediaApi";
import { setError, setLoading, setResults } from "../redux/features/SearchSlice";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    if(!query) return
    const getData = async () => {
      try {
        dispatch(setLoading())
        let data = [];
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }

        if (activeTab == "videos") {
          // data=await fetchVideos(query)
          let response = await fetchVideos(query);

          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name,
            thumbnail: item.image,
            src: item.video_files?.[0]?.link
          }));
        }

        if (activeTab == "gif") {
          //  data = await fetchGIF(query);
          let response = await fetchGIF(query);
          data = response.data.map((item) => ({
            id: item.id,
            type: "gif",
            thumbnail: item.embed_url,
            title: item.title || "gif",
            src:item.images.original.url,
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err));
      }
    };
    getData();
  }, [query, activeTab]);

  if(error) return <ErrorPage/>
  if(loading) return <Loading/>

  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5">
    {
      results.map((item,idx)=>{
       return <ResultCard key={idx} item={item}/>
      })
    }
  </div>;
};

export default ResultGrid;
