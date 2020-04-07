import React from "react";

export default ({ data, cityFilter, setCityFilter }) => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCityFilter(event.target.value);
  };

  const handleSelectChange = (event) => {
    console.log("ev", event.target.value);
    setCityFilter(event.target.value);
  };

  const Option = ({ city }) => (
    <option value={city.comune}>{city.comune}</option>
  );

  return (
    <div>
      Seleziona una città
      <select value={cityFilter} onChange={handleSelectChange}>
        {data && data.map((city) => <Option key={city.comune} city={city} />)}
      </select>
    </div>
  );
};
