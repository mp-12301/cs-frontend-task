import React from "react";
import PropTypes from "prop-types";

import cls from "./CircularScore.css";

function CircularScore(props) {
  const { score, maxScore } = props;
  return (
    <div className={cls.circularContainer}>
      <svg
        viewBox="0 0 36 36"
        preserveAspectRatio="xMidYMid meet"
        className={cls.circularChart}
      >
        <path
          className={cls.circle}
          strokeDasharray={`${((score * 100) / maxScore)}, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className={cls.circularData}>
        <div className={cls.text}>Your credit score is</div>
        <div className={cls.score}> {score} </div>
        <span className={cls.text}>out of</span>
        <span className={cls.maxScore}> {maxScore} </span>
      </div>
    </div>
  );
}

CircularScore.propTypes = {
  score: PropTypes.number,
  maxScore: PropTypes.number,
};

CircularScore.defaultProps = {
  score: 0,
  maxScore: 0,
};


export default CircularScore;
