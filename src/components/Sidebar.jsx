import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";
import { RiHistoryLine } from "react-icons/ri";
import { RiPlayList2Fill } from "react-icons/ri";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

function Sidebar() {
  const SidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHomeFill />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const SidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <BsPersonBoundingBox />,
    },
    {
      id: 2,
      name: "History",
      icon: <RiHistoryLine />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <RiPlayList2Fill />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <FaRegCaretSquareRight />,
    },
    {
      id: 5,
      name: "Watch Later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked Videos",
      icon: <AiOutlineLike />,
    },
  ];
  const SidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <BsPersonBoundingBox />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <RiHistoryLine />,
    },
    {
      id: 3,
      name: "Music",
      icon: <RiPlayList2Fill />,
    },
    {
      id: 4,
      name: "Movies",
      icon: <FaRegCaretSquareRight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <AiOutlineLike />,
    },
  ];
  return (
    <div className="px-6 w-[15%] h-[calc(100vh-3.625rem)] overflow-y-scroll hidden-scroll overflow-x-hidden">
      <div className="space-y-2 items-center">
        {SidebarItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center space-x-3 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <div className="mt-4 space-y-2 items-center">
        <div className="flex items-center space-x-2 hover:bg-gray-300 duration-300 rounded-xl p-1">
          <h1 className="font-bold ">You</h1>
          <FaChevronRight />
        </div>
        {SidebarItems2.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center space-x-3 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <div className="mt-4 space-y-2 items-center">
        <h1 className="items-center space-x-2 font-bold ">Explore</h1>
        {SidebarItems3.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center space-x-3 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
