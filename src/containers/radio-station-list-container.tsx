import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getListApi, popularListApi } from "../apis/list-api";
import RadioStationList, {
  RadioList,
} from "../components/list/radio-station-list";
import RadioStationListFilter from "../components/list/radio-station-list-filter";

interface FilterList {
  votes: number;
}

export default function RadioStationListContainer() {
  const navigation = useNavigate();

  const [radioList, setRadioList] = useState<RadioList[]>([]);

  const onClickRadioStation = (stationuuid: string) => {
    navigation(`/radio-stations/${stationuuid}`);
  };

  const handleChange = async (args: { value: string }) => {
    const { value } = args;

    const ascRadioList = await getListApi();
    const popularList = await popularListApi();

    if (value === "인기순") setRadioList(popularList);
    if (value === "가나다순") setRadioList(ascRadioList);
  };

  useEffect(() => {
    getListApi().then(setRadioList);
  }, []);

  return (
    <RadioStationListWrapper>
      <RadioStationListFilter handleChange={handleChange} />
      <RadioStationList
        radioList={radioList}
        onClickRadioStation={onClickRadioStation}
      />
    </RadioStationListWrapper>
  );
}

const RadioStationListWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
