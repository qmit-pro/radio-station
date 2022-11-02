import * as F from "./radio-station-detail-styles";

export interface Props {
  radioStation: RadioStation;
}

export interface RadioStation {
  name: string;
  url: string;
  message: string;
}

export default function RadioStationDetail({ radioStation }: Props) {
  return (
    <F.DetailWrapper>
      <F.RadioStationName>{radioStation.name}</F.RadioStationName>
      <video src={radioStation.url} controls autoPlay height="200px"></video>
      <div>{radioStation.message}</div>
    </F.DetailWrapper>
  );
}
