import React from "react";

const Table = () => {
  const tableStyle = {
    color: "white",
    width: "100%",
    height: "300px",
  };

  const headerCellStyle = {
    color: "yellow",
    padding: "10px", 
    textAlign: "center",
  };

  const cellStyle = {
    padding: "10px", 
    textAlign: "center",
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Column</th>
            <th style={headerCellStyle}>Column</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>Row1</td>
            <td style={cellStyle}>Row2</td>
          </tr>
          <tr>
            <td style={cellStyle}>Row </td>
            <td style={cellStyle}>Row</td>
          </tr>
          <tr>
            <td style={cellStyle}>Row</td>
            <td style={cellStyle}>Row</td>
          </tr>
          <tr>
            <td style={cellStyle}>Row</td>
            <td style={cellStyle}>Row</td>
          </tr>
          <tr>
            <td style={cellStyle}>Row</td>
            <td style={cellStyle}>Row</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
