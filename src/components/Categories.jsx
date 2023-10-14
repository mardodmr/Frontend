import { useBanner } from "context/banner-context";
import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

// onclick and lifting up the state
function Categories({ tag, setTag }) {
  const { setUserType } = useBanner();
  const handleChange = (newValue) => {
    setTag(newValue);
    // console.log(newValue, "123");
    setUserType("");
  };

  const categories = [
    "ALL",
    "PHONE CASES",
    "JEWELRY",
    "NECKLACE",
    "CUSTOM GIFTS",
    "ACCESSORIES",
    "ART",
    "BEAUTY",
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <ToggleButtonGroup
        type="radio"
        name="options"
        value={tag}
        onChange={handleChange}
        // defaultValue={categories[0]}
      >
        {categories.map((category) => {
          return (
            <ToggleButton
              key={category}
              id={`tbg-btn-${category}`}
              value={category}
            >
              {" "}
              {category}{" "}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </div>
  );
}

export default Categories;
