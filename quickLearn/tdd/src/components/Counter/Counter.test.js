import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Counter Component", () => {
  test('O contador deve iniciar com o valor 0', () => {
    render(<Counter />);
    const counterTitle = screen.getByText("0");    
    expect(counterTitle).toBeInTheDocument();
  })
  
  test("O título deve conter a classe counter__title", () => {
    render(<Counter />);
    const counterTitle = screen.getByText("0");
    expect(counterTitle).toHaveClass("counter__title");
  })

  test("não deve iniciar o título com a classe counter__title--increment", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).not.toHaveClass("counter__title--increment");
    expect(counterTitle).not.toHaveClass("counter__title--decrement");
  });

  test("deve conter um botão decrementar", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(buttonDecrement).toBeInTheDocument();
  });

  test("deve conter um botão decrementar com as classes button e button--decrement", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(buttonDecrement).toHaveClass("button");
    expect(buttonDecrement).toHaveClass("button--decrement");
  });


  test("deve conter um botão incrementar", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(buttonIncrement).toBeInTheDocument();
  });

  test("deve conter um botão incrementar com as classes button e button--increment", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(buttonIncrement).toHaveClass("button");
    expect(buttonIncrement).toHaveClass("button--increment");
  });

  test("deve decrementar - 1 ao clicar no botão decrementar", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("deve incrementar + 1 ao clicar no botão incrementar", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
})