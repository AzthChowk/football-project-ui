import React from "react";

const ResultListCard = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "5px",
        padding: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <div>
        <p style={{ fontSize: "10pt", color: "#454545" }}>
          MATCH NO. {props.matchNumber} - {props.date.split("T")[0]}
        </p>
      </div>

      <div style={{ padding: "10px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            {props.imageOne ? (
              <img
                src={props.imageOne}
                alt=""
                style={{ width: "25px", objectFit: "contain" }}
              />
            ) : (
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  objectFit: "contain",
                  backgroundColor: "#999",
                  borderRadius: "50%",
                }}
              ></div>
            )}

            <h4 style={{ paddingLeft: "10px", fontWeight: 600 }}>
              {props.opponentOneName}
            </h4>
          </div>
          <div>
            <p>{props.opponentOneGoalScore}</p>
          </div>
        </div>
        <div style={{ padding: "10px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              {props.imageTwo ? (
                <img
                  src={props.imageTwo}
                  alt=""
                  style={{ width: "25px", objectFit: "contain" }}
                />
              ) : (
                <div
                  style={{
                    width: "25px",
                    height: "25px",
                    objectFit: "contain",
                    backgroundColor: "#999",
                    borderRadius: "50%",
                  }}
                ></div>
              )}
              <h4 style={{ paddingLeft: "10px", fontWeight: 600 }}>
                {props.opponentTwoName}
              </h4>
            </div>
            <div>
              <p>{props.opponentTwoGoalScore}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p style={{ fontSize: "10pt", color: "#454545" }}>
          Playground & Time : {props.playground}, {props.time}
        </p>
      </div>
    </div>
  );
};

export default ResultListCard;
