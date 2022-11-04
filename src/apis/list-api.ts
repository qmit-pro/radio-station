import { RadioList } from "../components/list/radio-station-list";

export const commonUrl = "api.radio-browser.info/json";

type GetListApi = (args: {
  order: string;
  reverse: boolean;
  limit: number;
  hidebroken: boolean;
}) => Promise<RadioList[]>;

export const getListApi: GetListApi = ({
  order,
  reverse,
  limit,
  hidebroken,
}) => {
  return fetch(
    `http://all.${commonUrl}/stations/bytag/pop?order=${order}&reverse=${reverse}&limit=${limit}&hidebroken=${hidebroken}`
  ).then((res) => res.json());
};
