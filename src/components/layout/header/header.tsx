import * as F from "./header-styles"
import logo from "../../../imgs/white-logo.png"
import { useNavigate } from "react-router-dom"

export default function LayoutHeader() {
  const navigation = useNavigate()

  const goToList = () => {
    navigation("/radio-station")
  }

  const AddRadioStation = () => {
    navigation("/add-radio-station")
  }

  return(
    <F.HeaderWrapper>
      <F.Logo
        src={logo}
        alt="로고가 없어요"
        onClick={goToList}
       />
      <F.HeaderMenuWrapper>
        <F.HeaderMenu onClick={AddRadioStation}>라디오국 신규등록</F.HeaderMenu>
        <div>|</div>
        <F.HeaderMenu onClick={goToList}>라디오국 리스트</F.HeaderMenu>
      </F.HeaderMenuWrapper>
    </F.HeaderWrapper>
    )
}