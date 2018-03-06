import React from 'react';
import PropTypes from 'prop-types';

const Promotion =(props) => {
    //console.log(props);
    let amount = props.amount;
    let returns = props.returns;
    let promotion = props.promotion;
    let purchasingChannelCode = props.purchasingChannelCode;
    let promotionDescription=[]; 
    let i=0;
    if(undefined!=promotion && promotion!=""){
    while(i<promotion.length){
        console.log("test");
        let j=0;
        promotionDescription.push(promotion[i].Description[j].shortDescription);
        i++;
    }
}
    return(
        <div>
            <div>
            <div className="amount">
                        {amount}
                        <sub className="offerText">online price</sub>
                        </div> 
                        </div>
                        <hr/>
            {promotionDescription.map(function(content,index){
                return (<div className="desc" key={"descrip"+index}> <span className="glyphicon glyphicon-tag">{content}</span> </div>);
            })}
               <hr/>

               {/* <span className="glyphicon glyphicon-tag"></span> */}
            <div className="row">
            <div className="col-md-5">
            <div className="col-md-12 quantity">
            <div className="paddingTop5"> 
            <span> quantity</span>
            <span className="floatRight">
            <button className="button rounded">
            <span className="colWhite glyphicon glyphicon-minus"></span>
            </button>
            <span className="selectedQuantity"> 1 </span>
            <button className="button rounded">
            <span className="colWhite glyphicon glyphicon-plus"></span>
            </button>
            </span>
            </div>
            </div>
            </div>
            </div>
            <div className="row margintop10">
            <div className="col-md-6">
            {(purchasingChannelCode==0||purchasingChannelCode==2)&&
            <button className="btnPickUp">PICK UP IN STORE   </button>
            }
            </div>
            <div className="col-md-6">
            {(purchasingChannelCode==0||purchasingChannelCode==1)&&
            <button className="btnAddToCart">ADD TO CART  </button>
            }
            </div>
            </div>
            <div className="row margintop10">
            <div className="col-md-1">
            returns 
            </div> 
            <div className="col-md-11">
             <div dangerouslySetInnerHTML={{__html: returns}}></div>
            </div>
            </div>
            </div>
    );
};

Promotion.defaultProps = {
    returns: "",
    purchasingChannelCode: "",
    amount: "",
  };

  Promotion.propTypes = {
    returns: React.PropTypes.string,
    purchasingChannelCode: React.PropTypes.string,
    amount: React.PropTypes.string
  };

export default Promotion;