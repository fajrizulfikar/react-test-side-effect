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
  describe("when isLoading is true", () => {
    describe("given 200ms have not yet elapsed", () => {
      it("should render nothing", () => {
        const { queryByText } = render(
          <App isLoading>
            <div>Hello World</div>
          </App>
        )
        expect(queryByText("Hello World")).toBeNull()
      })
    })
  })
})
