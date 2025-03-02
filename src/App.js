import React from "react";

const ARCard = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My AR Business Card</h1>

      <p>Tap on a button to view the model in AR:</p>

      <a href="/whatsapp.usdz" rel="ar">
        <button style={buttonStyle}>View WhatsApp Model</button>
      </a>

      <a href="/linkedin.usdz" rel="ar">
        <button style={buttonStyle}>View LinkedIn Model</button>
      </a>

      <a href="/website.usdz" rel="ar">
        <button style={buttonStyle}>View Website Model</button>
      </a>
    </div>
  );
};

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default ARCard;
