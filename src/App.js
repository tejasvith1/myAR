import React, { useEffect } from "react";

const ARCard = () => {
  useEffect(() => {
    // Auto-launch AR for iOS (USDZ) and Android (WebXR)
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      window.location.href = "whatsapp.usdz"; // Change to your default model
    } else if (userAgent.includes("android")) {
      window.location.href = "intent://whatsapp.glb#Intent;scheme=https;package=com.google.ar.core;end;";
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My AR Business Card</h1>
      <p>Your camera should open automatically. If not, tap a button below:</p>

      <a href="whatsapp.usdz" rel="ar">
        <button style={buttonStyle}>View WhatsApp Model</button>
      </a>

      <a href="linkedin.usdz" rel="ar">
        <button style={buttonStyle}>View LinkedIn Model</button>
      </a>

      <a href="website.usdz" rel="ar">
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
