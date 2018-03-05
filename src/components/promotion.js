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
        let j=0;
        promotionDescription.push(promotion[i].Description[j].shortDescription);
        i++;
    }
}
    return(
        <div>
            {amount}
            {promotionDescription.map(function(content,index){
                return (<div className="desc" key={"descrip"+index}> {content} </div>);
            })}
            <div className="row">
            <div className="col-md-5">
            <span> Quantity</span>
            <span className="glyphicon glyphicon-minus"></span>
            1
            <span className="glyphicon glyphicon-plus"></span>
            </div>
            </div>
            <div className="row">
            <div className="col-md-3">
            {(purchasingChannelCode==0||purchasingChannelCode==2)&&
            <button>PICK UP IN STORE   </button>
            }
            </div>
            <div className="col-md-3">
            {(purchasingChannelCode==0||purchasingChannelCode==1)&&
            <button>ADD TO CART  </button>
            }
            </div>
            </div>
            <div className="row">
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