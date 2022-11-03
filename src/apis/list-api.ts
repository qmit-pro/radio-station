export const commonUrl = "api.radio-browser.info/json";

export const getListApi = (order: string) =>
  fetch(`http://all.${commonUrl}/stations/byname/pop?order=${order}`).then(
    (res) => res.json()
  );
