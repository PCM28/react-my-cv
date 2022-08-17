// rfce, comando para que salga por defecto un comando en react
import React from 'react'
import "./More.scss";
// const {languages, habilities, volunteer} = More;

const More = ({languages, habilities, volunteer}) =>{
  // console.log(props);
  return (
    <div className='card-principal'>
      <div className="card5">
        {languages.map((item)=>{
          return (
            <div key={JSON.stringify(item)} className="text5">
              <p>{item.name}</p>
              <p>{item.level}</p>
            </div>
          );
        })}
      </div>
      <div className="card6">
        {habilities.map((item)=>{
          return (
            <div key={JSON.stringify(item)} className="text6">
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <div className="text7">
        <p>{volunteer.name}</p>
        <p>{volunteer.where}</p>
        <p>{volunteer.description}</p>
      </div>
    </div>
  )
}

export default More
