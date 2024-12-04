import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import SubmittedDataTable from "./SubmittedDataTable";

const DynamicForm = ({ formStructure }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = (e, field) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update progress
    const completedFields = formStructure.fields.filter(
      (field) => field.required && formData[field.name]
    ).length;
    setProgress(((completedFields + 1) / formStructure.fields.length) * 100);
  };

  const validateForm = () => {
    const newErrors = {};
    formStructure.fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData([...submittedData, formData]);
      setFormData({});
      setProgress(0);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div>
      <ProgressBar progress={progress} />
      <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
        {formStructure.fields.map((field) => (
          <div key={field.name} style={{ marginBottom: "15px" }}>
            <label>
              {field.label} {field.required && "*"}:
            </label>
            {field.type === "dropdown" ? (
              <select
                name={field.name}
                onChange={(e) => handleChange(e, field)}
                value={formData[field.name] || ""}
                style={{ display: "block", padding: "8px", marginTop: "5px" }}
              >
                <option value="" disabled>
                  Select {field.label}
                </option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                onChange={(e) => handleChange(e, field)}
                value={formData[field.name] || ""}
                style={{ display: "block", padding: "8px", marginTop: "5px" }}
              />
            )}
            {errors[field.name] && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}
        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit
        </button>
      </form>
      <SubmittedDataTable data={submittedData} />
    </div>
  );
};

export default DynamicForm;
