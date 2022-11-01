import { commonUrl } from "./list-api";

export const getDetailApi = () =>
  fetch(
    `http://de1.${commonUrl}/url/9d857acf-fc89-4bc6-8746-c54d3bb40067`
  ).then((res) => res.json());
