import React, {useState, useEffect } from "react";

const Home = () => {
  const greet = "Welcome  To  My Portfolio";
  console.log(greet.split(""));
  return (
    <section id="home">
      <div className="content-home">
      <div className="greet">{
      greet.split("").map((char,index)=>(
        <span key={index} style={{
          animationDelay :`${index * 0.25}s`,
           animationDuration: `${greet.length * 0.3}s`
        }}>{char}</span>
      ))
      }</div>
  
      <div className="intro">
        <img className="my-img" src="/Beach front2.jpeg" alt="My pic" />
        <p>Hello, I'm <span className="my-name">Lokeshwar Kamuni</span>, a passionate and innovative frontend
        developer based in Hyderabad, Telangana. I specialize in crafting
        dynamic and responsive web applications using the latest technologies.
        My goal is to create user-friendly solutions that not only meet client
        requirements but also enhance user experiences.</p>
      </div>
      </div>
    </section>
  );
};

export default Home;
