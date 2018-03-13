import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Promotion extends Component {
    constructor(){
        super();
        this.state= {
            quantity : 1
        };
    }

    handler=(e)=>{
        let quantity, operation;

        if(e.target.id==="btnPlus")
        {
            quantity = this.state.quantity;
            quantity++;
            this.setState({quantity});
        }
        if(e.target.id==="btnMinus"&& this.state.quantity>=0)
        {
            quantity = this.state.quantity;
            if(quantity>1)
            quantity--;
            this.setState({quantity});
        }
    }
    

    render(){
    let amount = this.props.amount;
    let returns = this.props.returns;
    let promotion = this.props.promotion;
    let purchasingChannelCode = this.props.purchasingChannelCode;
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
            <div>
            <div className="amount">
                        {amount}
                        <span className="offerText">online price</span>
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
            <button id="btnMinus" className="button rounded colWhite glyphicon glyphicon-minus" onClick={this.handler}>
            </button>
            <span className="selectedQuantity"> {this.state.quantity} </span>
            <button id="btnPlus" className="colWhite glyphicon glyphicon-plus button rounded" onClick={this.handler}>
            </button>
            </span>
            </div>
            </div>
            </div>
            </div>
            <div className="row margintop10">
            <div className="col-md-6 col-xs-6">
            {(purchasingChannelCode==0||purchasingChannelCode==2)&&
            <button className="btnPickUp">PICK UP IN STORE   </button>
            }
            </div>
            <div className="col-md-6 col-xs-6">
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
            <div className="row">
            <div className="col-md-12 col-xs-12">
                <div className="col-md-4 col-xs-4 navMenu">
                <div className="col-md-12 navBgClr"><a className="anchorTag" href="#">ADD TO REGISTRY</a></div></div>
                <div className="col-md-4 col-xs-4 navMenu">
                <div className="col-md-12 navBgClr marginLeft4"><a className="anchorTag" href="#">ADD TO LIST</a></div></div>
                <div className="col-md-4 col-xs-4 navMenu">
                <div className="col-md-12 navBgClr marginLeft4"><a className="anchorTag" href="#">SHARE</a></div></div>
            </div>
            </div>
            </div>
    );
}
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
