import { useNavigate } from "react-router-dom"

import * as F from "./header-styles"
import logo from "../../imgs/logo.png"

export default function LayoutHeader() {
  const navigation = useNavigate()

  const goToList = () => {
    navigation("/radio-stations")
  }

  const NewRadioStation = () => {
    navigation("/radio-stations/new")
  }

  return(
    <F.HeaderWrapper>
      <F.Logo
        src={logo}
        alt="로고"
        onClick={goToList}
       />
      <F.HeaderMenuWrapper>
        <F.HeaderMenu onClick={NewRadioStation}>라디오국 신규등록</F.HeaderMenu>
        <div>|</div>
        <F.HeaderMenu onClick={goToList}>라디오국 리스트</F.HeaderMenu>
      </F.HeaderMenuWrapper>
    </F.HeaderWrapper>
    )
}
