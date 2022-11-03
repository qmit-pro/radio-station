import { RadioList } from "../components/list/radio-station-list";

export const commonUrl = "api.radio-browser.info/json";

type GetListApi = (args: {
  order: string;
  reverse: boolean;
  limit: number;
}) => Promise<RadioList[]>;

export const getListApi: GetListApi = ({ order, reverse, limit }) => {
  return fetch(
    `http://all.${commonUrl}/stations/byname/pop?order=${order}&reverse=${reverse}&limit=${limit}`
  ).then((res) => res.json());
};
