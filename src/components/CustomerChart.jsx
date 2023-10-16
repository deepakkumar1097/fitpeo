import React from "react";
import DoughnutChart from "./DoughnutChart";

function CustomerChart() {
  return (
    <div className="customer-container">
      <div className="customerChat-title">
        <h2>Customers</h2>
        <span>Customers that buy products</span>
      </div>

      <DoughnutChart />
    </div>
  );
}

export default CustomerChart;
