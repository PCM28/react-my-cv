// rfce, comando para que salga por defecto un comando en react
import React from 'react'
import "./About.scss";
const About = ({about}) =>{
  return (
    <div>
      <div className="card2">
        <h2 className="title2">About Me</h2>
        {about.map((item)=>{
          return (
            <div key={JSON.stringify(item)} className="text">
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default About;