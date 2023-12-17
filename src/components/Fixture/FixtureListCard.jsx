import React from "react";

const FixtureListCard = (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "20px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <div>
          <p style={{ fontSize: "11pt" }}>
            MATCH NO. {props.matchNumber} - {props.date.split("T")[0]}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ padding: "10px 0" }}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <img
                src={props.image}
                alt=""
                style={{ width: "25px", objectFit: "contain" }}
              />
              <h4 style={{ paddingLeft: "10px", fontWeight: 600 }}>
                {props.opponentOneName}
              </h4>
            </div>
            <div style={{ padding: "10px 0" }}>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <img
                  src={props.imageTwo}
                  alt=""
                  style={{ width: "25px", objectFit: "contain" }}
                />
                <h4 style={{ paddingLeft: "10px", fontWeight: 600 }}>
                  {props.opponentTwoName}
                </h4>
              </div>
            </div>
          </div>
          <div>
            <p>1</p>
            <p>1</p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: "11pt" }}>
            Playground & Time : {props.playground}, {props.time}
          </p>
        </div>
      </div>
    </>
  );
};

export default FixtureListCard;

{
  /* <div style={{ display: "flex", justifyContent: "space-between" }}>
  <div style={{ display: "flex" }}>
    <div style={{ backgroundColor: "red" }}>
      {item.id}
      {item.matchNumber}

      {item.opponentOneName}
      {item.opponentTwoName}
      {item.matchStage}
      {item.time}
      {item.date}
    </div>
  </div>
</div>; */
}
