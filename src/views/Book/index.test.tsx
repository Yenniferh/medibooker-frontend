import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./index";

describe("BookingPage", () => {
  test("renders the page with correct doctorId and timeSlot", () => {
    const doctorId = "123";
    const timeSlot = "2022-01-01T09:00:00";

    render(
      <MemoryRouter initialEntries={[`/book/${doctorId}/${timeSlot}`]}>
        <Routes>
          <Route path="/book/:doctorId/:timeSlot" element={<BookingPage />} />
        </Routes>
      </MemoryRouter>,
    );

    const pageTitle = screen.getByText("Book Appointment");
    const doctorInfo = screen.getByText(/Dr. 123/);
    const timeSlotInfo = screen.getByText(/2022-01-01T09:00:00/);

    expect(pageTitle).toBeInTheDocument();
    expect(doctorInfo).toBeInTheDocument();
    expect(timeSlotInfo).toBeInTheDocument();
  });
});
