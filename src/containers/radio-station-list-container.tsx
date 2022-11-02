import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getListApi } from "../apis/list-api";
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

    const radioList = await getListApi();

    if (value === "인기순")
      radioList.sort(
        (a: { votes: number }, b: { votes: number }) => b.votes - a.votes
      );
    if (value === "가나다순")
      radioList.sort(
        (a: { name: number }, b: { name: number }) => a.name - b.name
      );

    setRadioList(radioList);
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
