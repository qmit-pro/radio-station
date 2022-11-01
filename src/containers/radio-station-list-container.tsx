import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getListApi } from "../apis/list-api";
import RadioStationList, {
  RadioList,
} from "../components/list/radio-station-list";

export default function RadioStationListContainer() {
  const navigation = useNavigate();

  const [radioList, setRadioList] = useState<RadioList[]>([]);

  const onClickRadioStation = (stationuuid: string) => {
    navigation(`/radio-stations/${stationuuid}`);
  };

  useEffect(() => {
    getListApi().then(setRadioList);
  }, []);

  return (
    <RadioStationListWrapper>
      <RadioStationList
        radioList={radioList}
        onClickRadioStation={onClickRadioStation}
      />
    </RadioStationListWrapper>
  );
}

const RadioStationListWrapper = styled.div`
  padding: 30px;
`;
