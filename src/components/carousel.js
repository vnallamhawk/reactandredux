import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'style!css!react-responsive-carousel/lib/styles/carousel.css';
import '../../public/style/style.scss';

const Image =(props)=> {
    let title = props.title;
    let images = props.images;
    return(
        <div>
          <div className="title">
            {title}
            </div>
            <div className="carouselImage">
            <Carousel axis="horizontal" showArrows={true}>
     {images.map(function(key,index){
return (<div key={index}> <img src={key.image}/> </div>);
     })}
      </Carousel>
      </div>
     </div>);
};
Image.defaultProps = {
    title: "",
    images: []
  };

  Image.propTypes = {
    title: React.PropTypes.string,
    images : React.PropTypes.array
  };


export default Image;