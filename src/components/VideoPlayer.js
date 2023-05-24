import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useState } from "react";

function VideoPlayer(props) {
  const [videoData, setVideoData] = useState("");
  const { id } = useParams();
  const url = "https://cdn.gro.care/" + id.slice(1) + ".mp4";

  fetch("https://internship-service.onrender.com/videos?page=" + props.pageNo)
    .then((res) => res.json())
    .then((jsonRes) =>
      setVideoData(jsonRes.data.posts[id.slice(0, 1)].submission)
    );

  return (
    <div className="video_wrapper">
      <div className="video_player">
        <ReactPlayer url={url} width="350px" height="auto" controls />
        <div className="video_player_info">
          <h2>{videoData.title}</h2>
          <p>{videoData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
