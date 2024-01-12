import React from "react";

const BarTable = () => {
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

  const cellStyle2 = {
    padding: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const statusBarContainerStyle = {
    flex: 1,
    marginLeft: "5px",
  };

  const statusBarStyle = {
    height: "10px",
    width: "100%",
    backgroundColor: "#5cb85c",
  };

  const completedStatusBarStyle = {
    height: "100%",
    width: "40%",
    backgroundColor: "#f0ad4e",
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
            <td style={cellStyle2}>
              Row2
              <div style={statusBarContainerStyle}>
                <div style={statusBarStyle}>
                  <div style={completedStatusBarStyle}></div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>Row1</td>
            <td style={cellStyle2}>
              Row2
              <div style={statusBarContainerStyle}>
                <div style={statusBarStyle}>
                  <div style={completedStatusBarStyle}></div>
                </div>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td style={cellStyle}>Row1</td>
            <td style={cellStyle2}>
              Row2
              <div style={statusBarContainerStyle}>
                <div style={statusBarStyle}>
                  <div style={completedStatusBarStyle}></div>
                </div>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td style={cellStyle}>Row1</td>

            <td style={cellStyle}>Row2</td>
          </tr>{" "}
          <tr>
            <td style={cellStyle}>Row1</td>
            <td style={cellStyle}>Row2</td>
          </tr>{" "}
          <tr>
            <td style={cellStyle}>Row1</td>
            <td style={cellStyle}>Row2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BarTable;
