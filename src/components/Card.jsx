import React from "react";
import { Typography } from "@mui/material";

function Card({
  title,
  money,
  percent,
  period,
  icon: Icon,
  fontColor,
  percentColor,
  periodTextColor,
  iconColor,
  BgColor,
  iconBgColor,
}) {
  const cardStyle = {
    color: fontColor,
    backgroundColor: BgColor,
  };
  const percentStyle = {
    color: percentColor,
  };
  const periodStyle = {
    color: periodTextColor,
  };
  const iconStyle = {
    color: iconColor,
  };
  const iconContainer = {
    backgroundColor: iconBgColor,
  };

  return (
    <div className="card-container" style={cardStyle}>
      <div className="card-icon" style={iconContainer}>
        <Icon style={iconStyle} />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <Typography className="card-money">{money}</Typography>
        <Typography className="card-percent" style={percentStyle}>
          {percent}
          <span className="card-period" style={periodStyle}>
            {" "}
            {period}
          </span>
        </Typography>
      </div>
    </div>
  );
}

export default Card;
