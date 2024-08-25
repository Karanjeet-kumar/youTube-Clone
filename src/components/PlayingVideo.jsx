import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapid_api";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideo, setrelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };

  return (
    <div className="flex justify-center flex-row w-[calc(100%-56px)] mt-16">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[450px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="text-md font-bold line-clamp-2">{video?.title}</div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full ovrflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0].url}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="flex flex-col ml-3">
                  <div className="text-md font-semibold flex items-center">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] ml-1 text-[12px]" />
                    )}
                  </div>
                  <div className="text-sm">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
                <span className="mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-500">
                  Subscribe
                </span>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl mr-2" />
                {`${abbreviateNumber(video?.stats?.views, 2)} views`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                {`${abbreviateNumber(video?.stats?.views, 2)} views`}
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
            {video?.description}
          </div>
          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
            {video?.stats?.comments} <p>Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
