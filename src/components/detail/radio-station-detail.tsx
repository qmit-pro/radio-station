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
    // TODO: 진행예정입니다
    <div>
      <div>이름: {radioStation.name}</div>
      <div>url: {radioStation.url}</div>
      <div>message: {radioStation.message}</div>
    </div>
  );
}
