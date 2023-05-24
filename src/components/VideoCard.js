import React from "react";
import { Link } from "react-router-dom";

const VideoCard = (props) => {
  return (
    <>
      <div className="video_container">
        <Link
          to={`/video/${props.vidIndex}${props.items.submission.mediaUrl.slice(
            21,
            -4
          )}`}
        >
          <img
            className="thumbnail"
            src={props.items.submission.thumbnail}
            alt={props.items.submission.title}
          />
          <h3>{props.items.submission.title}</h3>
        </Link>
        <span className="creator_desc">
          <img
            className="creator_pic"
            src={props.items.creator.pic}
            alt={props.items.creator.name}
          />
          <p>{props.items.creator.handle}</p>
        </span>
      </div>
    </>
  );
};

export default VideoCard;
