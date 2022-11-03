import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getListApi } from "../apis/list-api";
import RadioStationList, {
  RadioList,
} from "../components/list/radio-station-list";
import RadioStationListFilter from "../components/list/radio-station-list-filter";

export default function RadioStationListContainer() {
  const navigation = useNavigate();

  const [radioList, setRadioList] = useState<RadioList[]>([]);

  const onClickRadioStation = (stationuuid: string) => {
    navigation(`/radio-stations/${stationuuid}`);
  };

  const handleChange = async (args: { value: string }) => {
    const { value } = args;

    if (value === "names") {
      const ascRadioList = await getListApi({
        order: "name",
        reverse: false,
        limit: 20,
      });
      setRadioList(ascRadioList);
    } else if (value === "votes") {
      const popularList = await getListApi({
        order: "votes",
        reverse: true,
        limit: 20,
      });
      setRadioList(popularList);
    }
  };

  useEffect(() => {
    getListApi({
      order: "name",
      reverse: false,
      limit: 20,
    }).then(setRadioList);
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
