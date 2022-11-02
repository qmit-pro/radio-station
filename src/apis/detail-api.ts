import { commonUrl } from "./list-api";

export const getDetailApi = (stationuuid: string) =>
  fetch(`http://de1.${commonUrl}/url/${stationuuid}`).then((res) => res.json());
