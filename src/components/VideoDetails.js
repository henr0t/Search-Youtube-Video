import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div className="ui active inline inverted loader"></div>;
  }

  const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;
  const videoURL = `http://www.youtube.com/watch?v=${video.id.videoId}`;

  return (
    <div>
      <div className="inverted ui embed segment">
        <iframe title="videoplayer" src={videoSrc} />
      </div>
      <div className="inverted ui segment">
        <h3 className="ui header">{video.snippet.title}</h3>
        <button
          onClick={() => {
            window.open(videoURL);
          }}
          className="ui mini youtube button"
        >
          <i className="youtube icon"></i>
          YouTube
        </button>
        <div className="ui inverted divider"></div>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
