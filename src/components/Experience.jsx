import React from 'react'
import "./Experience.scss";
const Experience = ({experience}) =>{
  return (
    <div>
      <div className="card4">
        {experience.map((item)=>{
          return (
            <div key={JSON.stringify(item)} className="text4">
              <p>{item.name}</p>
              <p>{item.date}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Experience;
