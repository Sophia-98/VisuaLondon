import React, { useState } from "react";

import Overlay from "./overlay/overlay";

import Hover from "./hover/hover";

const Information = ({ data_number, position }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => setOverlayVisible(!overlayVisible);

  return (
    <>
      <Hover overlay={toggleOverlay} position={position} data_number={data_number} className="brent_hover"/>

      <div style={{ display: overlayVisible ? "block" : "none" }}>
        <Overlay overlay={toggleOverlay} data_number={data_number}/>
      </div>
    </>
  );
}

export default Information;