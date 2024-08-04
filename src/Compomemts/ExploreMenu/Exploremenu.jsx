import React from 'react';
import './Explore.css'; // Ensure the correct path to the CSS file
import Banner from '../../assets/Ba.png'; // Correctly import the image

function ExploreMenu() { // Changed function name to CamelCase for consistency
  return (
    <>
      <div className="Container"> {/* Fixed class name */}
        <div className="heading">
          <h2>Simply Unique <span>/</span> <br /> Simply Better</h2>
        </div>
        <div className="para">
          <p><span>3legat</span> is a gift & decoration store based in HCMC, Vietnam. <br /> Established since 2019</p> {/* Fixed spelling and grammar */}
        </div>
      </div>

      <div className="mainImage"> {/* Fixed class name */}
        <img src={Banner} alt="Banner" /> {/* Fixed src import and alt text */}
      </div>
    </>
  );
}

export default ExploreMenu;
