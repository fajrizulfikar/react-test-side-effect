import React from "react"
import { render, cleanup } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  afterEach(cleanup)

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
    describe("given 200ms have elapsed", () => {
      it("should render loading indicator", () => {
        jest.useFakeTimers()
        const { getByText } = render(
          <App isLoading>
            <div>Hello World</div>
          </App>
        )
        jest.runAllTimers()
        expect(getByText("Loading...")).toBeDefined()
      })
    })
  })
})
