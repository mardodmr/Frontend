import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

// onclick and lifting up the state
function Categories() {
  const [toggledTag, setToggledTag] = useState("");

  const handleChange = ( newValue) => {
    setToggledTag(newValue);
    console.log(toggledTag, "123")
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
    <div>
      <ToggleButtonGroup
        type="radio"
        name="options"
        //value={toggledTag}
        onChange={handleChange}
        defaultValue={categories[0]}
      >
        {categories.map((category) => {
          return (
            <ToggleButton  key= {category} id={`tbg-btn-${category}`} value={category}>
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
