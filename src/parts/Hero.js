import React from 'react'
import Fade from 'react-reveal/Fade';

import ImageHero from "assets/images/img-hero.jpg"
import ImageHero_ from "assets/images/img-hero-frame.jpg"
import IconCities from "assets/images/icons/icon-cities.svg"
import IconTraveler from "assets/images/icons/icon-traveler.svg"
import IconTreasure from "assets/images/icons/icon-treasure.svg"

import Button from "elements/Button"

import formatNumber from "utils/formatNumber"

export default function Hero(props) {

        function showMostPicked(){
            window.scrollTo({
                top: props.refMostPicked.current.offsetTop - 30,
                behavior: "smooth"
            })
        }

    return (
        <Fade bottom>
        <section className="container pt-4">
            <div className = "row align-items-center">
                <div className = "col-auto pr-5" style={{ width : 530} }>
                    <h1 className = "font-weight-bold text-green line-height-1 mb-3">
                        Forget Your Work, <br/>
                        Still in ComfortZone
                    </h1>

                    <p className="mb-4 font-weight-light text-yellow w-75" 
                    style={{lineHeight:"170%"}}>
                    Apart from work, the other thing that you need is  holiday 
                    with your partner. Your comfort holiday, make your day 
                    beautiful and memorable.
                    </p>

                    <Button  className="btn px-10" 
                    hasShadow 
                    isPrimary 
                    onClick={showMostPicked}
                    >
                        Show More
                    </Button>

                    <div className="row" style={{marginTop:50}}>
                        <div className="col-auto text-green" style={{marginRight:35}}>
                            <img  
                            width ="36" 
                            height="36"
                            src={IconTraveler} 
                            alt={'${props.data.travelers} Travelers' } />
                            <h6 className = "mt-3">
                                {formatNumber(props.data.travelers)} {" "}
                                <span className="text-yellow font-weight-light">
                                    travelers
                                </span>
                            </h6>
                        </div>

                        <div className="col-auto text-green" style={{marginRight:35}}>
                            <img 
                            width ="36" 
                            height="36"
                            src={IconTreasure} 
                            alt={'${props.data.treasure} Treasures' } />
                            <h6 className = "mt-3">
                                {formatNumber(props.data.treasures)} {" "}
                                <span className="text-yellow font-weight-light">
                                    treasures
                                </span>
                            </h6>
                        </div>

                        <div className="col-auto text-green" >
                            <img 
                            width ="36" 
                            height="36"
                            src={IconCities} 
                            alt={'${props.data.cities} Cities' } />
                            <h6 className = "mt-3">
                                {formatNumber(props.data.cities)} {" "}
                                <span className="text-yellow font-weight-light">
                                    cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style ={{ width: 480, height: 370}}>
                        <img 
                        src={ImageHero} 
                        alt="Room with couches" 
                        className="img-fluid position-absolute" 
                        style={{margin: '-30px 0 0 -30px', zIndex:1}}/>

                        <img 
                        src={ImageHero_} 
                        alt="Room with couches frame" 
                        className="img-fluid position-absolute" 
                        style={{margin: '0 -15spx -15px 0'}}/>
                    </div>
                </div>

            </div>
            
        </section>
        </Fade>
    )
}
