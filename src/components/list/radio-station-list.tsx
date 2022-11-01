import * as F from "./radio-station-list-styles";
import noImage from "../../imgs/noImage.png";

export interface Props {
  radioList: RadioList[];
  onClickRadioStation: (stationuuid: string) => void;
}

export interface RadioList {
  stationuuid: string;
  favicon: string;
  name: string;
}

export default function RadioStationList({
  radioList,
  onClickRadioStation,
}: Props) {
  return (
    <F.RadioListWrapper>
      {radioList.map((radioStation) => (
        <F.RadioStationWrapper
          key={radioStation.stationuuid}
          onClick={() => onClickRadioStation(radioStation.stationuuid)}
        >
          {radioStation.favicon ? (
            <F.RadioStationImg src={radioStation.favicon} />
          ) : (
            <F.RadioStationImg src={noImage} />
          )}
          <F.RadioStationName>{radioStation.name}</F.RadioStationName>
        </F.RadioStationWrapper>
      ))}
    </F.RadioListWrapper>
  );
}
