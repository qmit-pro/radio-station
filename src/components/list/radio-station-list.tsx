import * as F from "./radio-station-list-styles";

import noImage from "../../imgs/noImage.png";

export interface Props {
  radioList: RadioList[];
}

export interface RadioList {
  changeuuid: string;
  favicon: string;
  name: string;
}

export default function RadioStationList({ radioList }: Props) {
  return (
    <F.RadioListWrapper>
      {radioList.map((radioStation) => (
        <F.RadioStationWrapper key={radioStation.changeuuid}>
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
