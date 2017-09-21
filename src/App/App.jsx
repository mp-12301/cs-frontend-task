import React, { Component } from "react";
import axios from "axios";

import cls from "./App.css";

import CircularScore from "../common/components/CircularScore";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credit: {
        score: 0,
        maxScore: 0,
      },
    };

    this.fetchScore();
  }

  fetchScore = () => {
    axios.get("/api/credits/mockvalues").then((response) => {
      if (response.data && response.data.creditReportInfo) {
        const { maxScoreValue, score } = response.data.creditReportInfo;
        this.setState({ credit: {
          maxScore: maxScoreValue,
          score,
        } });
      }
    });
  }

  render() {
    const { score, maxScore } = this.state.credit;
    return (
      <div className={cls.main}>
        { score && maxScore ?
          <CircularScore score={score} maxScore={maxScore} />
          : "Fetching credit score ..."
        }
      </div>
    );
  }
}

export default App;
