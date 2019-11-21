import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  describe("when isLoading is false", () => {
    it("should render children", () => {
      const { getByText } = render(
        <App isLoading={false}>
          <div>Hello World</div>
        </App>
      )
      expect(getByText("Hello World")).toBeDefined()
    })
  })
})
