import { ChangeEvent } from "react";

interface Props {
  handleChange: (args: { value: string }) => Promise<void>;
}

export default function RadioStationListFilter({ handleChange }: Props) {
  const onChangeSelectList = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    handleChange({ value });
  };

  return (
    <select
      style={{ width: "100px", height: "30px", cursor: "pointer" }}
      onChange={onChangeSelectList}
    >
      <option value="name">가나다순</option>
      <option value="votes">인기순</option>
    </select>
  );
}
