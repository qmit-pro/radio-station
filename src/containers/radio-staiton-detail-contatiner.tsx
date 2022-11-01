import { useEffect, useState } from "react";

import RadioStationDetail from "../components/detail/radio-station-detail";

export default function RadioStationDetailContainer() {
  const [radioStation, setRadioStation] = useState("");

  // TODO: 진행 예정입니다
  useEffect(() => {
    fetch(
      "http://de1.api.radio-browser.info/json/url/9d857acf-fc89-4bc6-8746-c54d3bb40067"
    )
      .then((res) => res.json())
      .then(setRadioStation);
  }, []);

  return <RadioStationDetail radioStation={radioStation} />;
}
