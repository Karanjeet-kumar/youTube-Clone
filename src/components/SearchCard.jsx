import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function SearchCard({ video }) {
  console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-row">
          <div className="relative h-38 rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full rounded-lg"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex items-start mt-3 space-x-2">
            <div className=" h-9 w-9 rounded-full overflow-hidden border">
              <img
                className="h-full w-full rounded-full overflow-hidden"
                src={video?.author?.avatar[0].url}
                alt=""
              />
            </div>
            <div>
              <span className="text-md font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-bold mt-2 text-[13px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex font-bold text-gray-600 text-[13px]">
                <span>
                  {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                </span>
                <span className="flex text-[24px] leading-none relative top-[-10px] mx-1">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCard;
