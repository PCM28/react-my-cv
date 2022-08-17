import React from 'react'
import "./Education.scss";
//rfce
const Education = ({education}) =>{
  return (
    <div>
      <div className="card3">
        {education.map((item)=>{
          return (
            <div key={JSON.stringify(item)} className="text3">
              <p className='name'>{item.name}</p>
              <p>{item.date}</p>
              <p>{item.where}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Education;