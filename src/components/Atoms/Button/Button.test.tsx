import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import ThemeProviderWrapper from "../../../utils/ThemeProviderWrapper";
import Button from "./Button";

describe("Button tests", () => {
  const onClickFn = vi.fn();
  it("should render button correclty", () => {
    render(
      <ThemeProviderWrapper>
        <Button label="Button test" onClick={onClickFn} />
      </ThemeProviderWrapper>
    );

    const button = screen.getByText(/Button test/i);
    button.click();

    expect(button).toBeVisible();
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
