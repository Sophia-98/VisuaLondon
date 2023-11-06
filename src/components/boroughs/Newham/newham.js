import React from "react";
import Nav from "../../../components/navigation/navigation";

// coming soon page
const Card = () => {
  return (
    <div>
      <div>
        <Nav
          path="../assets/locations/Newham/newham_logo.png"
          titlewrap="titlewraplocations"
          title="areas"
        />
        <div className="loader">
          <img src="../assets/main_components/Loading.gif" alt="Coming Soon" />
          <h1>Page Coming Soon!</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
