import { ChangeEvent } from "react";

interface Props {
  handleChangeCheckbox: (checked: boolean) => Promise<void>;
  isChecked: boolean;
}

export default function RadioStationListOperating({
  handleChangeCheckbox,
  isChecked,
}: Props) {
  const onChangeOperatingCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    handleChangeCheckbox(e.target.checked);
  };

  return (
    <div style={{ display: "flex", alignSelf: "center" }}>
      <input
        type="checkbox"
        style={{ cursor: "pointer" }}
        onChange={onChangeOperatingCheckbox}
        checked={isChecked}
      />
      <span>현재 운영중인 방송국만 보기</span>
    </div>
  );
}
