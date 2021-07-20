import React from "react";
import { shallow } from "enzyme";
import SquareDataGifs from "../../Components/SquareDataGifs/SquareDataGifs";

describe("Pruebas en <SquareDataGifs />", () => {
  test("Debe mostrar el componente correctamente", () => {
    // ARRANGE
    const wrapper = shallow(<SquareDataGifs word="name" />);
    // ACT
    // ASSERT
    expect(wrapper).toMatchSnapshot();
  });
});
