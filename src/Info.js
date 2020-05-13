import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="infoWrapper">
      <h2>About</h2>
      <p>
        Based on{" "}
        <a href={"https://www.youtube.com/watch?v=5gl3cCB_26M"} target="blank">
          advance redux patterns
        </a>
      </p>

      <p>You can check all actions in console</p>
      <p>
        Here is{" "}
        <a
          href={"https://github.com/kacperkoza34/redux_middleware"}
          target="blank"
        >
          repo
        </a>
      </p>

      <p>
        Check my{" "}
        <a href={`${window.location}books`} target="blank">
          data-base
        </a>
        . I use json-server to connect with fake API
      </p>

      <div className="photoWrapper">
        <div className="photo">
          <img src={"images/redux1.png"} alt="ups" />
        </div>
      </div>
    </div>
  );
};

export default Info;
