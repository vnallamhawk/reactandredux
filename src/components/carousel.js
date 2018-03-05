import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'style!css!react-responsive-carousel/lib/styles/carousel.css';

const Image =(props)=> {
    console.log(props);
    let title = props.title;
    let images = props.images;
    return(
        <div>
            {title}
            <Carousel showArrows={true}>
     {images.map(function(key,index){

return (<div> <img src={key.image}/> </div>);
     })}
      </Carousel>
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