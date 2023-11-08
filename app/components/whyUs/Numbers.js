import React from "react";

const Numbers = ({ data }) => {
  return (
    <div class="numbers">
      <div class="item one">
        <div class="num" data-val={data.Customers}>
          0
        </div>
        <span> Customers Pleased.</span>
      </div>
      <div class="item two">
        <div class="num" data-val={data.Projects}>
          0
        </div>
        <span>Projects Done.</span>
      </div>
      <div class="item three">
        <div class="num" data-val={data.Annuals}>
          0
        </div>
        <span>Annual Projects.</span>
      </div>
    </div>
  );
};

export default Numbers;
