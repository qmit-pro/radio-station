import { useEffect, useState } from "react";

import { getDetailApi } from "../apis/detail-api";
import RadioStationDetail from "../components/detail/radio-station-detail";

export default function RadioStationDetailContainer() {
  const [radioStation, setRadioStation] = useState("");

  useEffect(() => {
    getDetailApi().then(setRadioStation);
  }, []);

  return <RadioStationDetail radioStation={radioStation} />;
}
