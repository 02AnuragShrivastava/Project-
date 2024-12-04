import React, { useState } from "react";
import DynamicForm from "./components/DynamicForm";
const App = () => {
  const [formStructure, setFormStructure] = useState(null);

  const fetchFormStructure = (selection) => {
    const mockApiResponses = {
      "User Information": {
        fields: [
          {
            name: "firstName",
            type: "text",
            label: "First Name",
            required: true,
          },
          {
            name: "lastName",
            type: "text",
            label: "Last Name",
            required: true,
          },
          { name: "age", type: "number", label: "Age", required: false },
        ],
      },
      "Address Information": {
        fields: [
          { name: "street", type: "text", label: "Street", required: true },
          { name: "city", type: "text", label: "City", required: true },
          {
            name: "state",
            type: "dropdown",
            label: "State",
            options: ["California", "Texas", "New York"],
            required: true,
          },
          { name: "zipCode", type: "text", label: "Zip Code", required: false },
        ],
      },
      "Payment Information": {
        fields: [
          {
            name: "cardNumber",
            type: "text",
            label: "Card Number",
            required: true,
          },
          {
            name: "expiryDate",
            type: "date",
            label: "Expiry Date",
            required: true,
          },
          { name: "cvv", type: "password", label: "CVV", required: true },
          {
            name: "cardholderName",
            type: "text",
            label: "Cardholder Name",
            required: true,
          },
        ],
      },
    };
    setFormStructure(mockApiResponses[selection] || null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Form</h1>
      <select
        onChange={(e) => fetchFormStructure(e.target.value)}
        defaultValue=""
        style={{ padding: "10px", margin: "20px 0" }}
      >
        <option value="" disabled>
          Select Form Type
        </option>
        <option value="User Information">User Information</option>
        <option value="Address Information">Address Information</option>
        <option value="Payment Information">Payment Information</option>
      </select>
      {formStructure && <DynamicForm formStructure={formStructure} />}
    </div>
  );
};

export default App;
