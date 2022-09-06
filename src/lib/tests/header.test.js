import React from "react";
import renderer from "react-test-renderer";
import Header from "../header";

describe("Header", () => {
    it("renders properly", () => {
        const tree = renderer
            .create(<Header header="Login" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});