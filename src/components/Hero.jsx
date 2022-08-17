import React from "react";
import "./Hero.scss";

const Hero = ({hero}) => {
    return (
        <div className="hero">
            {
                <div className="card">
                    <img src={hero.image} alt=""/>
                    <div>
                        <h2>{hero.name}</h2>{/* Forma de aparezaca los atributos al hacer hero.? */}
                        <p>{hero.adress}</p>
                        <p>{hero.city}</p>
                        <p>{hero.birthDate}</p>
                        <p>{hero.email}</p>
                        <p>{hero.phone}</p>
                        <p><a href={hero.github}>GitHub</a></p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Hero;