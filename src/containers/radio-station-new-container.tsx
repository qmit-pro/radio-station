import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getNewApi } from "../apis/new-api";
import RadioStationNew from "../components/new/radio-station-new";

const inputValues = {
  name: "",
  favicon: "",
};

export default function RadioStationNewContainer() {
  const navigation = useNavigate();

  const [radioInputs, setRadioInputs] = useState(inputValues);

  const { name, favicon } = radioInputs;

  const handleChangeInput = (args: { name: string; value: string }) => {
    const { name, value } = args;

    setRadioInputs({
      ...radioInputs,
      [name]: value,
    });
  };

  const onClickSubmit = async () => {
    await getNewApi({ name, favicon });

    setRadioInputs(inputValues);
    navigation("/radio-stations");
  };

  return (
    <RadioStationNew
      name={name}
      favicon={favicon}
      onClickSubmit={onClickSubmit}
      handleChangeInput={handleChangeInput}
    />
  );
}
