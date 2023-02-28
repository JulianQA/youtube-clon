import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearchVideosByKeyword } from "../../api/api";
import { RelatedVideoPreview } from "../../components/RelatedVideoPreview/RelatedVideoPreview";
import "./SearchScreen.css";
const SearchScreen = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState();
  useEffect(() => {
    getSearchedVideos();
  }, [query]);
  const getSearchedVideos = async () => {
    const res = await getSearchVideosByKeyword(query);
    setVideos(res?.items);
    console.log(res);
  };
  return (
    <div className="SearchScreen">
      {videos?.map((video) => (
        <RelatedVideoPreview relatedVideo={video} searchScreen={true} />
      ))}
    </div>
  );
};

export { SearchScreen };
