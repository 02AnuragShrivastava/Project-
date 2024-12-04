import React from "react";

const SubmittedDataTable = ({ data }) => {
  if (data.length === 0) return null;

  return (
    <div>
      <h3>Submitted Data</h3>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              {Object.values(entry).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmittedDataTable;
