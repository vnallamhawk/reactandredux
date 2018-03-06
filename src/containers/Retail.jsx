import React,{Component} from 'react';
import {fetchItems} from '../actions/item';
import {connect} from 'react-redux';
import ProductHighlights from '../components/productHighlights';
import Ratings from '../components/rating';
import Price from '../components/promotion';
import Carousel from '../components/carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
class Retail extends Component{
    constructor(){
        super();
        // this.state = {
        //     highlign hts :[]
        // }
    }
    componentDidMount(){
        this.props.fetchItems();
    }   
    render(){
        let ProductHighlight=null,Rating=null,price=null,carousel=null;
        const {items} = this.props;
        if(undefined!=items && items.length>0)
        {
            console.log(items);
        let props = {amount:items[0].Offers[0].OfferPrice[0].formattedPriceValue,
            promotion:items[0].Promotions,
            returns:items[0].ReturnPolicy[0].legalCopy,
            purchasingChannelCode:items[0].purchasingChannelCode };

        let rating={overallRating: Number(items[0].CustomerReview[0].consolidatedOverallRating),
            overallReview: items[0].CustomerReview[0].totalReviews,
            proReview: Number(items[0].CustomerReview[0].Pro[0].overallRating),
            proDesc: items[0].CustomerReview[0].Pro[0].review,
            proTitle: items[0].CustomerReview[0].Pro[0].title,
            proUser : items[0].CustomerReview[0].Pro[0].screenName,
            proDate : items[0].CustomerReview[0].Pro[0].datePosted,
            conReview: Number(items[0].CustomerReview[0].Con[0].overallRating),
            conDesc: items[0].CustomerReview[0].Con[0].review,
            conTitle: items[0].CustomerReview[0].Con[0].title,
            conUser : items[0].CustomerReview[0].Con[0].screenName,
            conDate : items[0].CustomerReview[0].Con[0].datePosted
        };

        ProductHighlight =  <ProductHighlights highlights={items[0].ItemDescription[0].features} />;
        Rating = <Ratings {...rating}/>;
        price = <Price {...props}/>;
        carousel = <Carousel images={items[0].Images[0].AlternateImages} title={items[0].title}/>;
        }

        //console.log(this.props.items[0].ItemDescription[0].features)
        return(     
            <div>          
            <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-6'>
                {carousel}
                {Rating}
            </div>

            <div className='col-md-6'>
            {price}
                 {ProductHighlight}
            </div>
            </div>
            </div>
            </div>
        );
    }
}

Retail.defaultProps = {
    items: [],
    purchasingChannelCode: "",
    amount: "",
  };

  Retail.propTypes = {
    items: React.PropTypes.array,
  };



const mapDispatchToProps = (dispatch) =>{
    return {
        fetchItems: () => {
            dispatch(fetchItems());
        }
    };
};

const mapStateToProps = (state) =>{
    return {
        items : state.items
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Retail);