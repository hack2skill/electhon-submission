import React, { useContext,useState,useEffect } from "react";
import { DataContext } from "../context/Context";
import ElectionPollCard from "../utils/ElectionPollCard";

const ElectionPolls = () => {
  const {getElectionPolls,address} = useContext(DataContext);
  const [polls,setPolls]=useState([]);
  useEffect(()=>{
    (async()=>{
      let data = await getElectionPolls();
      console.log(data);
      let newArray=[];
      data.map((item,i)=>{
        let res= {
          id:item.id.toNumber(),
          title:item.title,
          deleted:item.deleted,
          description:item.description,
          director:item.director,
          ends:item.endsAt.toNumber(),
          starts:item.startsAt.toNumber(),
          votes:item.votes,

        }

        newArray.push(res);
      });

      setPolls(newArray);
      
    })()
  },[])
  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12 py-10">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            World's First Transparent Election Poll
          </span>{" "}
          Democracy Chain
        </h1>
      </div>
      <div className="container my-2 mx-auto px-4 md:px-12 py-2">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {polls.map((item,i)=>{
            return(<ElectionPollCard item={item} key={i}/>)
          })}
        </div>
      </div>
    </>
  );
};

export default ElectionPolls;
