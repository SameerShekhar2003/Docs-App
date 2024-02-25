import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      key: 1,
      desc: "This is the background color of the card that will be displayed. ",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      key: 2,
      desc: "This is the background color of the card that will be displayed. ",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      key: 3,
      desc: "This is the background color of the card that will be displayed. ",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
    // Add the four additional data objects here
    {
      key: 4,
      desc: "This is another card with different content.",
      filesize: "1.2mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "orange" },
    },
    {
      key: 5,
      desc: "Yet another card description here.",
      filesize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Preview", tagColor: "purple" },
    },
    
  ];
  
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index)=>(
        <Card key={item.key} data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
