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
        <div className="flex flex-col md:flex-row p-2 space-x-5">
          <div className="relative flex h-38 w-90 md:w-60">
            <img
              className="h-full w-full rounded-lg "
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>

          <div>
            <span className="text-md font-bold line-clamp-2">
              {video?.title}
            </span>
            <div className="flex font-bold text-gray-600 text-[13px]">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="flex text-[24px] leading-none relative top-[-10px] mx-1">
                .
              </span>
              <span>{video?.publishedTimeText}</span>
            </div>
            <div className="flex flex-row space-x-3 mb-1">
              <div className=" h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
              <span className="flex items-center font-bold mt-2 text-[13px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
            </div>
            <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2">
              {video?.descriptionSnippet}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCard;
