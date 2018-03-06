import React from 'react';
import Rating from 'react-stars';

const Reviews = (props) =>{
    let {overallRating,overallReview,proReview,proDesc,proTitle,conReview,conDesc,conTitle,proUser,
proDate,conUser,conDate} = props;
    return(<div className="ratingContainer">  
            <div className="row paddingTop15">
            <div className="col-sm-offset-1 col-md-3 marginTop9">
            <Rating value={overallRating} edit={false}  size={24}/>  
            </div>
          
            <div className="col-md-5 overallText">
            overall
            </div>
            <div className="col-md-3">
            <div className='overallReviews'> View all {overallReview} reviews  </div>
            </div>
            </div>
            
         <div className='row'> 
        <div className='col-sm-offset-1 col-md-5'>
        <span className="reviewTitle"> PRO </span>
        <div className="ratingSub"> most helpful 4-5 star review </div>
        </div>
        <div className='col-md-5'>
        <span className="reviewTitle"> CON </span>
        <div className="ratingSub"> most helpful 1-2 star review </div>
        </div>
        </div>
        <hr/>
        <div className='row'>
        <div className='col-sm-offset-1 col-md-5'>
        <Rating value={proReview} edit={false}/>
        <strong> {proTitle} </strong>
        <p> {proDesc} </p>
        <p> <a>{proUser}</a> {proDate} </p>
        </div>
        <div className='col-md-5'>
        <Rating value={conReview} edit={false}/>
        <strong> {conTitle} </strong>
        <p> {conDesc} </p>
        <p> <a>{conUser}</a> {conDate} </p>
        </div>
        </div>
        </div>
        );
};

export default Reviews;