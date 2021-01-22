import React, { useState } from "react";
import Input from "../components/Input";
import Title from "../components/Title";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
const copyright = "created by baha ";
function HomeContainer() {
  const history = useHistory();
  const [city, setCity] = useState("");
  const handleonChange = (value) => {
    setCity(value);
  };
  return (
    <div className="home">
      <Title title={"Weather App"} color="green" isgreen={false} />
      <Input onChange={handleonChange} />
      <Button onClick={() => history.push(`/weather/${city}`)}>
        Get the weather near me{" "}
      </Button>
      <div style={{ position: "absolute", bottom: "0", right: "10px" }}>
        <Title title={copyright} color="green" isgreen={true} />
      </div>
    </div>
  );
}
export default HomeContainer;
