export const getListApi = () =>
  fetch(
    "http://all.api.radio-browser.info/json/stations/byname/pop?limit=20"
  ).then((res) => res.json());

export const getDetailApi = () =>
  fetch(
    "http://de1.api.radio-browser.info/json/url/9d857acf-fc89-4bc6-8746-c54d3bb40067"
  ).then((res) => res.json());
