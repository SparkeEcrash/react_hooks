import React from "react";
import ReactDOM from "react-dom";
import Button from "./../button/button";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

test("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Button></Button>, div)
})

test("renders button correctly", () => {
	const {getByTestId} = render(<Button label="click me"></Button>)
	expect(getByTestId('button')).toHaveTextContent("click me");
	//get by the data-testid attribute on the button component
})

test("renders button correctly", () => {
	const {getByTestId} = render(<Button label="save"></Button>)
	expect(getByTestId('button')).toHaveTextContent("save");
	//get by the data-testid attribute on the button component
})

test("matches snapshot 1", () => {
	const tree = renderer.create(<Button label="save"></Button>).toJSON();
	expect(tree).toMatchSnapshot();
})

test("matches snapshot 2", () => {
	const tree = renderer.create(<Button label="click me please"></Button>).toJSON();
	expect(tree).toMatchSnapshot();
})