import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import SquareItem from "../../Components/SquareItem/SquareItem";

describe("Pruebas en SquareItem", () => {
  const title = "Soy un título";
  const url = "/soy-una-ruta-de-imagen.png";

  const wrapper = shallow(<SquareItem title={title} url={url} />);

  // expect(SquareItem).toMatchSnapshuuuot()
  test("Verificar si el componente tiene una clase", () => {
    // ARRANGE
    const div = wrapper.find("div");
    const { className } = div.props();
    const expectedClassName = "SquareData__item";
    // ACT
    const isValid = className.includes(expectedClassName);
    // ASSERT
    expect(isValid).toBe(true);
  });
});
