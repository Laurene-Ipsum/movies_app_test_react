import React from "react"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"


export default function CarouselComponent() {
    return (
 
                <div className="slider-container">
                     <Carousel infiniteLoop useKeyboardArrows autoPlay>
                        <div>
                            <img src="http://image.tmdb.org/t/p/w185/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"/>
                        </div>
                        <div>
                          <img src="http://image.tmdb.org/t/p/w185/db32LaOibwEliAmSL2jjDF6oDdj.jpg"/>
                        </div>
                        <div>
                            <img src="http://image.tmdb.org/t/p/w185/dRZpdpKLgN9nk57zggJCs1TjJb4.jpg" />
                        </div>
                    </Carousel>
                </div>
            );
    }
