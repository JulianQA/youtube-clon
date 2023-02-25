import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getASingleVideoDetails,
  getCommentsByVideo,
  getRelatedVideos,
} from "../../api/api";
import { RelatedVideoPreview } from "../../components/RelatedVideoPreview/RelatedVideoPreview";
import { VideoComments } from "../../components/VideoComments/VideoComments";
import { VideoMetaData } from "../../components/VideoMetaData/VideoMetaData";
import "./WatchScreen.css";

const WatchScreen = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [comments, setComments] = useState();
  const [relatedVideos, setRelatedVideos] = useState();

  useEffect(() => {
    getVideo();
  }, [id]);
  useEffect(() => {
    getComments();
    getRelated();
  }, [video, id]);
  const getVideo = async () => {
    try {
      const res = await getASingleVideoDetails(id);
      setVideo(res?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const res = await getCommentsByVideo(video?.id);
      setComments(res?.items);
    } catch (error) {
      console.log(error);
    }
  };
  const getRelated = async () => {
    try {
      const res = await getRelatedVideos(video?.id);
      setRelatedVideos(res?.items);
    } catch (error) {}
  };
  return (
    <div className="WatchScreen">
      <div className="WatchScreen__left">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          className="left__video"
          title={video?.snippet?.title}
        ></iframe>

        {video && <VideoMetaData video={video} />}

        {comments && video && (
          <VideoComments comments={comments} video={video} />
        )}
      </div>
      <div className="WatchScreen__right">
        {relatedVideos?.map((relatedVideo) => (
          <RelatedVideoPreview
            relatedVideo={relatedVideo}
            key={relatedVideo?.id.videoId}
          />
        ))}
      </div>
    </div>
  );
};

export { WatchScreen };
