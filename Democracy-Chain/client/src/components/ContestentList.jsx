import React, { useEffect,useContext,useState } from "react";
import ContestantCard from "../utils/ContestantCard";
import ContestentBanner from "../utils/ContestentBanner";
import { DataContext } from "../context/Context";
import { useParams } from "react-router-dom";
const ContestentList = () => {
  const {listOfContestents,address} = useContext(DataContext);
  const {id} = useParams();
  const [members,setMembers]=useState([]);

  useEffect(()=>{
    (async()=>{
      let data = await listOfContestents(id,address);
      let newArray=[];
      data.map((item,i)=>{
        let res= {
          id:item.id.toNumber(),
          fullname:item.fullname,
          partyName:item.partyName,
          addr:item.voter,
          votes:item.votes.toNumber(),
          image:item.image
        }

        newArray.push(res);
      });

      setMembers(newArray);
    })();
  },[])
  return (
    <>
      <div className="container mt-10 my-2 mx-auto px-4 md:px-12 py-8">
        <ContestentBanner />
      </div>
      {members.length==0 ? <div className="font-bold w-full text-center text-red-900 mt-10 p-4" >No Members Were Elected for This Election Right Now</div> : <div className="container my-2 mx-auto px-4 md:px-12 py-8">
        <div className="flex flex-wrap ">
        {members.map((item,i)=><ContestantCard  item={item} key={i} eid={id} />)}
          
        </div>
      </div>}
    </>
  );
};

export default ContestentList;
