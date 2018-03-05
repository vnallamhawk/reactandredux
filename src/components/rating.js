import React from 'react';
import Rating from 'react-stars';

const Reviews = (props) =>{
//     let overallRating =  props.review[0].overallRating;
//     let overallReview = props.review[0].totalReviews;
//     let proReview = props.review[0].Pro[0].overallRating;
//     let proDesc  = props.review[0].Pro[0].review;
//     let proTitle = props.review[0].Pro[0].title;
//     let conReview = props.review[0].Con[0].overallRating;
//     let conDesc = props.review[0].Con[0].review;
//     let conTitle = props.review[0].Con[0].title;

    let {overallRating,overallReview,proReview,proDesc,proTitle,conReview,conDesc,conTitle} = props;

    console.log(conReview);
    // let title = props.title;
    return(<div><div><Rating value={overallRating}/>    
            <div> View all {overallReview} reviews  </div>
            </div>
         <div className='row'> 
        <div className='col-md-6'>
        <h3> PRO </h3>
        <Rating value={proReview}/>
        <strong> {proTitle} </strong>
        <p> {proDesc} </p>
        </div>
        <div className='col-md-6'>
        <h3> CON </h3>
        <Rating value={conReview}/>
        <strong> {conTitle} </strong>
        <p> {conDesc} </p>
        </div>
        </div>
        </div>
        );
};

export default Reviews;