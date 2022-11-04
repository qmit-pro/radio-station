import { ChangeEvent } from "react";
import * as F from "./radio-station-new-styles";

interface Props {
  name: string;
  favicon: string;
  onClickSubmit: () => Promise<void>;
  handleChangeInput: (args: { name: string; value: string }) => void;
}

export default function RadioStationNew({
  name,
  favicon,
  onClickSubmit,
  handleChangeInput,
}: Props) {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onClickSubmit();
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChangeInput({ name, value });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>방송국 이름</span>
        <input name="name" value={name} onChange={onChangeInput} />
      </div>
      <div>
        <span>사진 URL</span>
        <input name="favicon" value={favicon} onChange={onChangeInput} />
      </div>
      <F.SubmitButton type="submit">등록하기</F.SubmitButton>
    </form>
  );
}
