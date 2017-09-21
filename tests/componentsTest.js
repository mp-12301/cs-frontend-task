import React from "react";
import { shallow } from "enzyme";

import CircularScore from "../src/common/components/CircularScore";

describe("components", () => {
  describe("CircularScore", () => {
    const wrapper = shallow(<CircularScore />);

    it("should have all its subcomponents", () => {
      expect(wrapper.find("div .circularContainer").exists()).toBe(true);
      expect(wrapper.find("svg .circularChart").exists()).toBe(true);
      expect(wrapper.find("path .circle").exists()).toBe(true);
      expect(wrapper.find("div .circularData").exists()).toBe(true);
      expect(wrapper.find("div .score").exists()).toBe(true);
      expect(wrapper.find("div .maxScore").exists()).toBe(true);
    });

    it("should display data correctly", () => {
      const credit = {
        score: 132,
        maxScore: 900,
      };
      wrapper.setProps({ ...credit });

      expect(wrapper.find("div .score").text()).toEqual(` ${credit.score} `);
      expect(wrapper.find("div .maxScore").text()).toEqual(` ${credit.maxScore} `);
    });
  });
});
