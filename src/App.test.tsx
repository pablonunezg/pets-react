import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import App from "./App"

describe("App Component", () => {
    it("renders the React logo", () => {
        render(<App />)
        const logo = screen.getByAltText("React logo")
        expect(logo).toBeInTheDocument()
    })

    it("renders the heading", () => {
        render(<App />)
        const heading = screen.getByText(/My App React/i)
        expect(heading).toBeInTheDocument()
    })

    it("renders the initial count", () => {
        render(<App />)
        const button = screen.getByRole("button", { name: /count is 0/i })
        expect(button).toBeInTheDocument()
    })

    it("increments the count when the button is clicked", () => {
        render(<App />)
        const button = screen.getByRole("button", { name: /count is 0/i })
        fireEvent.click(button)
        expect(button).toHaveTextContent("count is 1")
    })

    it("renders the message", () => {
        render(<App />)
        const message = screen.getByText("Hello, Vite + React!")
        expect(message).toBeInTheDocument()
    })

    it("renders the link to React documentation", () => {
        render(<App />)
        const link = screen.getByRole("link", { name: /React logo/i })
        expect(link).toHaveAttribute("href", "https://react.dev")
    })
})