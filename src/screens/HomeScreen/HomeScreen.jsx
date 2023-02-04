import React from "react";
import { CategoriesBar } from "../../components/CategoriesBar/CategoriesBar";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <CategoriesBar />
      <div className="HomeScreen__videos">
        {[...new Array(20)].map(() => (
          <VideoPreview />
        ))}
      </div>
    </div>
  );
};

export { HomeScreen };
