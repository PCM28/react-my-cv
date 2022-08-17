// import { useState } from "react"; mostrar unas partes u otras no para añadir info ya que es cerrado
import './App.scss';
import Counter from "./components/counter/index";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";
import {CV} from "./CV/CV";
import { useState } from 'react';
const {hero, education, experience, languages, habilities, volunteer} = CV;

function App() {
  const [mostrar, setMostrar] = useState(1);
  return (
    
    <div className="App">
      
      <Hero hero={hero}/>
      <About about={hero.aboutMe}/>
      <Counter/>

      <button
        className='custom-btn'
        onClick={()=>{
          setMostrar(1)
          }}
      >
        Education
      </button>
      <button
        className='custom-btn'
        onClick={()=>{
          setMostrar(2)
          }}
      >
        Experience
      </button>
      <button 
        className='custom-btn'
        onClick={()=>{
          setMostrar(3)
          }}
      >
        More
      </button>
      {mostrar===1 ? <Education education={education} /> : (mostrar===2 ? <Experience experience={experience} /> : <More languages={languages} habilities={habilities} volunteer={volunteer}/>)}
      {/* {mostrar===1 && <Education education={education} />}
      {mostrar===2 && <Experience experience={experience} />}
      {mostrar===2 && <More languages={languages} habilities={habilities} volunteer={volunteer}/>} */}
    </div>
  );
}

export default App;