"use client";
import { useEffect, useState } from "react";

export default function Marketplace(){
  const [beats,setBeats]=useState([]);

  useEffect(()=>{
    fetch('/api/beats').then(r=>r.json()).then(setBeats)
  },[])

  return(
    <div style={{background:"black",color:"white",minHeight:"100vh",padding:20}}>
      <h1>Marketplace</h1>
      {beats.map(b=> (
        <div key={b._id} style={{margin:20,border:"1px solid #333",padding:10}}>
          <h3>{b.title}</h3>
          <audio src={b.url} controls />
          <p>${b.price/100}</p>
        </div>
      ))}
    </div>
  )
}