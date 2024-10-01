import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch, IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";
import { IoArrowBack } from "react-icons/io5";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebar, setSidebar, isMobileShow, setMobileShow } = useUtils();
  const [searchbar, setSearchbar] = useState(false);
  useEffect(() => {
    console.log({ isSidebar, isMobileShow });
  }, [isSidebar]);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1200) {
      setSidebar(!isSidebar);
      setMobileShow(!isMobileShow);
    }
    setSidebar(!isSidebar);
  };

  if (searchbar) {
    return (
      <div className="flex items-center justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
        <div>
          <IoArrowBack
            className="cursor-pointer"
            size={"28px"}
            onClick={() => setSearchbar(!searchbar)}
          />
        </div>
        <div className="flex flex-grow mx-4">
          <div className="w-[100%] px-5 border border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 border border-gray-400 bg-gray-100 rounded-r-full"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"28px"} />
          </button>
        </div>
        <div>
          <IoMdMic
            size={"28px"}
            className="ml-1 border border-gray-600 rounded-full p-1 cursor-pointer hover:bg-gray-200 duration-200"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center">
        <AiOutlineMenu
          className="text-xl cursor-pointer hover:bg-gray-200 duration-200"
          onClick={handleSidebar}
        />
        <ImYoutube2 size={"28px"} className="w-28 cursor-pointer" />
      </div>
      <div className="hidden md:flex w-[35%] ">
        <div className="w-[100%] px-5 border border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 border border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"28px"} />
        </button>
        <IoMdMic
          size={"28px"}
          className="ml-1 border border-gray-600 rounded-full p-1 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex space-x-5">
        <IoIosSearch
          className="cursor-pointer md:hidden"
          size={"28px"}
          onClick={() => setSearchbar(!searchbar)}
        />
        <RiVideoAddLine size={"28px"} />
        <FaRegBell size={"28px"} />
        <CgProfile size={"28px"} />
      </div>
    </div>
  );
}

export default Navbar;
