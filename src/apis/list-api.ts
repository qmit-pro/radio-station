export const commonUrl = "api.radio-browser.info/json";

export const getListApi = () =>
  fetch(`http://all.${commonUrl}/stations/byname/pop?limit=20`).then((res) =>
    res.json()
  );

export const popularListApi = () =>
  fetch(`http://all.${commonUrl}/stations/byname/pop?limit=20`)
    .then((res) => res.json())
    .then((res) =>
      res.sort(
        (a: { votes: number }, b: { votes: number }) => b.votes - a.votes
      )
    );
