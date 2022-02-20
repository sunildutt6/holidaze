import React from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
function DatePicker({ title }) {
  return (
    <div>
      <DatePickerComponent placeholder="Enter Date" />
    </div>
  );
}

export default DatePicker;
