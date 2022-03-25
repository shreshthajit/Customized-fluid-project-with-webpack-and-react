import React from "react";
import Collapsible from "react-collapsible";
import { Button } from "react-bootstrap";
import img1 from "./assets/img1.jpg";
import "./Collapse-card.css";
 import useCollapse from "react-collapsed";
import InnerCollapsible from "./InnerCollapse";

const Collapse_card = () => {
  // <div>
  //   <Collapsible trigger="Card"  className="collapsible-card">
  //     <div class="card" >
  //       <img src={img1} class="card-img-top" alt="..." />
  //       <div class="card-body">
  //         <h5 class="card-title">Card title</h5>
  //         <p class="card-text">
  //           Some quick example text to build on the card title and make up the
  //           bulk of the card's content.
  //         </p>
  //         <a href="#" class="btn btn-primary">
  //           Go somewhere
  //         </a>
  //       </div>
  //     </div>
  //   </Collapsible>
  // </div>

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? "Card" : "Card"}
      </div>
      <div {...getCollapseProps()}>
           <div class="card">
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                 Hello world
              </p>
               <button type="button" href="#" class="btn btn-primary">
                Go somewhere
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};
export default Collapse_card;
