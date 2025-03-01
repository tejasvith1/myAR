import React from "react";
import "aframe";
import "ar.js";

const ARViewer = () => {
  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
    >
      {/* Model 1: WhatsApp */}
      <a-entity
        gltf-model="./assets/whatsapp.glb"
        position="0 0 -2"
        scale="0.5 0.5 0.5"
        onclick="window.open('https://wa.me/919999999999', '_blank')"
      ></a-entity>

      {/* Model 2: LinkedIn */}
      <a-entity
        gltf-model="./assets/linkedin.glb"
        position="1 0 -2"
        scale="0.5 0.5 0.5"
        onclick="window.open('https://linkedin.com/in/tejasvithalani', '_blank')"
      ></a-entity>

      {/* Model 3: Website */}
      <a-entity
        gltf-model="./assets/website.glb"
        position="-1 0 -2"
        scale="0.5 0.5 0.5"
        onclick="window.open('https://tejasvith1.github.io', '_blank')"
      ></a-entity>

      <a-camera position="0 1.6 0">
        <a-cursor></a-cursor>
      </a-camera>
    </a-scene>
  );
};

export default ARViewer;
