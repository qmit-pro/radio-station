import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";

import RadioStationList, {
  RadioList,
} from "../components/list/radio-station-list";

export default function RadioStationListContainer() {
  const [radioList, setRadioList] = useState<RadioList[]>([]);

  const radioStationList = radioList.filter(
    (arr, index, callback) =>
      index ===
      callback.findIndex((radioStation) => radioStation.name === arr.name)
  );

  radioStationList.sort((a, b) => {
    if (a.name === b.name) return 0;
    else return 1;
  });

  useEffect(() => {
    const callAPI = async () => {
      try {
        const result = await axios.get(
          "http://all.api.radio-browser.info/json/stations/byname/pop"
        );
        setRadioList(result.data);
      } catch (error) {
        alert((error as Error).message);
      }
    };
    callAPI();
  }, []);

  return (
    <RadioStationListWrapper>
      <RadioStationList radioList={radioStationList} />
    </RadioStationListWrapper>
  );
}

const RadioStationListWrapper = styled.div`
  padding: 30px;
`;
