import React from 'react';
import Rating from 'react-stars';

const Reviews = (props) =>{
    let {overallRating,overallReview,proReview,proDesc,proTitle,conReview,conDesc,conTitle} = props;
    debugger;
    console.log(overallRating);
    return(<div>  
            <Rating value={overallRating} edit={false}/>  
            <div> View all {overallReview} reviews  </div>
            
         <div className='row'> 
        <div className='col-md-6'>
        <h3> PRO </h3>
        <Rating value={proReview} edit={false}/>
        <strong> {proTitle} </strong>
        <p> {proDesc} </p>
        </div>
        <div className='col-md-6'>
        <h3> CON </h3>
        <Rating value={conReview} edit={false}/>
        <strong> {conTitle} </strong>
        <p> {conDesc} </p>
        </div>
        </div>
        </div>
        );
};

export default Reviews;