import { useEffect, useState } from "react";
import { getDetailApi } from "../apis/apis";

import RadioStationDetail from "../components/detail/radio-station-detail";

export default function RadioStationDetailContainer() {
  const [radioStation, setRadioStation] = useState("");

  // TODO: 진행 예정입니다
  useEffect(() => {
    getDetailApi().then(setRadioStation);
  }, []);

  return <RadioStationDetail radioStation={radioStation} />;
}
