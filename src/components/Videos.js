import React from "react";

import VideoCard from "./VideoCard";

function Videos(props) {
  return (
    <>
      <div className="video_lib">
        {props.items.map((video, index) => {
          return (
            <VideoCard items={video} key={video.postId} vidIndex={index} />
          );
        })}
      </div>
    </>
  );
}

export default Videos;
