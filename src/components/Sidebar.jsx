import React from "react";
import { GoHomeFill } from "react-icons/go";
import {
  SiStylelint,
  SiTrendmicro,
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubeshorts,
  SiYoutubestudio,
} from "react-icons/si";
import { MdOutlineSubscriptions, MdPodcasts } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";
import { RiHistoryLine } from "react-icons/ri";
import { RiPlayList2Fill } from "react-icons/ri";
import {
  FaRegCaretSquareRight,
  FaRegNewspaper,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight, PiLightbulbLight } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { useUtils } from "../context/UtilsContext";

function Sidebar() {
  const { isSidebar, isMobileShow, setMobileShow } = useUtils();

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
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight />,
    },
    {
      id: 11,
      name: "Padcasts",
      icon: <MdPodcasts />,
    },
  ];
  const SidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];

  const ModelOverlay = () => {
    return (
      <div
        className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
        onClick={() => setMobileShow(!isMobileShow)}
      ></div>
    );
  };

  return (
    <>
      <div
        className={`${
          isMobileShow
            ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-30%"
            : "hidden h-[calc(100vh-3.625rem)] w-[15%]"
        } xl:static xl:block px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin`}
      >
        {/* Home Section */}
        <div className="space-y-2 items-center">
          {SidebarItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center space-x-3 hover:bg-gray-300 duration-300 rounded-xl p-1"
              >
                <div className="text-xl cursor-pointer">{item.icon}</div>
                <span className="text-sm cursor-pointer">{item.name}</span>
              </div>
            );
          })}
        </div>
        <br />
        <hr />

        {/* You Section */}
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
                <span className="text-sm cursor-pointer">{item.name}</span>
              </div>
            );
          })}
        </div>
        <br />
        <hr />

        {/* Explore Section */}
        <div className="mt-4 space-y-2 items-center">
          <h1 className="items-center space-x-2 font-bold ">Explore</h1>
          {SidebarItems3.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center space-x-3 hover:bg-gray-300 duration-300 rounded-xl p-1"
              >
                <div className="text-xl cursor-pointer">{item.icon}</div>
                <span className="text-sm cursor-pointer">{item.name}</span>
              </div>
            );
          })}
        </div>
        <br />
        <hr />

        {/* More Section */}
        <div className="mt-4 space-y-2 items-center">
          <h1 className="items-center space-x-2 font-bold ">
            More From Youtube
          </h1>
          {SidebarItems4.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center space-x-3 hover:bg-gray-300 duration-300 rounded-xl p-1"
              >
                <div className="text-xl cursor-pointer text-red-500">
                  {item.icon}
                </div>
                <span className="text-sm cursor-pointer">{item.name}</span>
              </div>
            );
          })}
          <hr />
        </div>
        <br />

        {/* Know Section */}
        <span className="text-xs text-gray-600 font-semibold">
          About Press Copyright <br /> Contact us Creators <br /> Advertise
          Developers <br />
          <p className="mt-3">Terms Privacy Policy & Safety</p>
          How YouTube works
          <br /> Test new features
        </span>
        <br />
        <p className="text-xs text-gray-500 mt-3">© 2024 Learn Coding</p>
      </div>

      {isMobileShow ? <ModelOverlay /> : null}
    </>
  );
}

export default Sidebar;
