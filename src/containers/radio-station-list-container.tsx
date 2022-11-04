import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getListApi } from "../apis/list-api";
import RadioStationList, {
  RadioList,
} from "../components/list/radio-station-list";
import RadioStationListFilter from "../components/list/radio-station-list-filter";
import RadioStationListOperating from "../components/list/radio-station-list-operating";

export default function RadioStationListContainer() {
  const navigation = useNavigate();

  const [radioList, setRadioList] = useState<RadioList[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [filterValue, setFilterValue] = useState("name");

  const onClickRadioStation = (stationuuid: string) => {
    navigation(`/radio-stations/${stationuuid}`);
  };

  const handleChange = async (args: { value: string }) => {
    const { value } = args;
    setFilterValue(value);

    const selectRadioList = await getListApi({
      order: value,
      reverse: value !== "name",
      limit: 20,
      hidebroken: false,
    });
    setRadioList(selectRadioList);
  };

  const handleChangeCheckbox = async (checked: boolean) => {
    if (checked) setIsChecked(true);
    if (!checked) setIsChecked(false);

    const result = await getListApi({
      order: filterValue === "name" ? "name" : "votes",
      reverse: filterValue !== "name",
      limit: 20,
      hidebroken: checked,
    });
    setRadioList(result);
  };

  useEffect(() => {
    getListApi({
      order: "name",
      reverse: false,
      limit: 20,
      hidebroken: false,
    }).then(setRadioList);
  }, []);

  return (
    <RadioStationListWrapper>
      <RadioStationFilterWrapper>
        <RadioStationListFilter handleChange={handleChange} />
        <RadioStationListOperating
          handleChangeCheckbox={handleChangeCheckbox}
          isChecked={isChecked}
        />
      </RadioStationFilterWrapper>
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

const RadioStationFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
