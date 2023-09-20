import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div
        className="w-full h-[320px] rounded-t-md"
        style={{
          backgroundImage: `url(${item.largeImageURL})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex mt-2 ml-2">
        <span className="font-medium text-base mr-2">Tags:</span>
        <div className="flex flex-wrap items-center gap-x-3">
          {item.tags.split(", ").map((tag, index) => (
            <p
              key={index}
              className=" bg-gray-700 text-white rounded-full px-2 py-1 text-sm mr-2 mb-2"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;

// div className="h-full shadow rounded-md max-w-sm w-full mx-auto animate-pulse">
//           <div className=" w-full h-[320px] rounded-t-md bg-slate-700"></div>
//           <div className="flex mt-2 ml-2 ">
//             <div className="font-medium text-base w-full mr-2 bg-slate-700 rounded"></div>
//             <div className="flex flex-wrap items-center gap-x-3 my-2 w-full bg-slate-700 rounded"></div>
//           </div>
//         </div>
