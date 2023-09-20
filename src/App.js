import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";
import Like from "./assets/like.svg";
import Card from "./component/Card";
import Header from "./component/Header";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=39531365-0f0f6711437439bd9bc7abac1&image_type=photo&pretty=true"
    )
      .then((res) => res.json())
      .then((data) => setItems(data.hits));
  }, []);

  // function onChange(sourceId, sourceIndex, targetIndex, targetId) {
  //   if (targetId) {
  //     const result = move(
  //       items[sourceId],
  //       items[targetId],
  //       sourceIndex,
  //       targetIndex
  //     );
  //     return setItems({
  //       ...items,
  //       [sourceId]: result[0],
  //       [targetId]: result[1],
  //     });
  //   }

  //   const result = swap(items[sourceId], sourceIndex, targetIndex);
  //   return setItems({
  //     ...items,
  //     [sourceId]: result,
  //   });
  // }
  function onChange(sourceId, sourceIndex, targetIndex) {
    const nextState = swap(items, sourceIndex, targetIndex);
    setItems(nextState);
  }
  return (
    <>
      <Header />
      <GridContextProvider onChange={onChange} className="w-full">
        <div className="w-[full] md:block hidden mx-auto ">
          <GridDropZone
            className="gap-5 w-[90%] mx-auto my-8"
            id="items"
            boxesPerRow={3}
            rowHeight={440}
            style={{ height: 440 * Math.ceil(items.length / 3) }}
          >
            {items.map((item) => (
              <GridItem key={item.id} className="cursor-pointer">
                <div className="bg-white rounded-md xl:w-[320px] lg:w-[270px] md:w-[220px] h-[400px] mt-12 shadow-md mx-auto">
                  <Card item={item} />
                </div>
              </GridItem>
            ))}
          </GridDropZone>
        </div>
        <div className="w-[full] md:hidden sm:block hidden mx-auto">
          <GridDropZone
            className="gap-5 "
            id="items"
            boxesPerRow={2}
            rowHeight={440}
            style={{ height: 440 * Math.ceil(items.length / 2) }}
          >
            {items.map((item) => (
              <GridItem key={item.id}>
                <div className="bg-white rounded-md sm:w-[270px] h-[400px] mt-3 mx-auto shadow-md">
                  <Card item={item} />
                </div>
              </GridItem>
            ))}
          </GridDropZone>
        </div>
        <div className="w-[full] sm:hidden block mx-auto">
          <GridDropZone
            className="gap-5 mt-8"
            id="items"
            boxesPerRow={1}
            rowHeight={440}
            style={{ height: 440 * Math.ceil(items.length / 1) }}
          >
            {items.map((item) => (
              <GridItem key={item.id}>
                <div className="bg-white rounded-md sm:w-[300px] w-[280px] h-[400px] mx-auto mt-3 shadow-md">
                  <Card item={item} />
                </div>
              </GridItem>
            ))}
          </GridDropZone>
        </div>
      </GridContextProvider>
    </>
  );
}

export default App;
