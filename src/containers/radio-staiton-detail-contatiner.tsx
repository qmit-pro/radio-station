import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDetailApi } from "../apis/detail-api";
import RadioStationDetail, {
  RadioStation,
} from "../components/detail/radio-station-detail";

export default function RadioStationDetailContainer() {
  const { stationuuid } = useParams();

  const [radioStation, setRadioStation] = useState<RadioStation>({
    name: "",
    url: "",
    message: "",
  });

  useEffect(() => {
    if (stationuuid) {
      getDetailApi(stationuuid).then(setRadioStation);
    }
  }, []);

  return <RadioStationDetail radioStation={radioStation} />;
}
