// import React from "react";

const Card = ({ name, username, id }) => {
  return (
    <>
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?set=set3`} alt="robot" />
        <h2>{name}</h2>
        <p>{username}</p>
      </div>
    </>
  );
};

export default Card;
