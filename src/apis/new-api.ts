import { RadioList } from "../components/list/radio-station-list";

export const commonUrl = "api.radio-browser.info/json";

type GetNewApi = (args: {
  name: string;
  favicon: string;
}) => Promise<RadioList[]>;

export const getNewApi: GetNewApi = ({ name, favicon }) => {
  return fetch("http://de1.api.radio-browser.info/json/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      favicon,
      countrycode: "RU",
      url: "https://canli.arabeskinmerkezi.com/9180/stream",
      tags: "pop",
    }),
  }).then((res) => res.json());
};
