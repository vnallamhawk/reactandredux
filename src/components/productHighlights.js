import React from 'react';

const ProductHighlights = props =>{
   let highlights = props.highlights;
   console.log(highlights);
   return (
       <div>
       <h2> Product highlights</h2>
    <ul>
        {highlights.map(function(name, index){
            return <li className="features" key={index} dangerouslySetInnerHTML={{__html: name}} />;
          })}
    </ul>
    </div>
);     
};

ProductHighlights.defaultProps = {
    highlights: []
  };

  ProductHighlights.propTypes = {
    highlights: React.PropTypes.array
  };


export default ProductHighlights;