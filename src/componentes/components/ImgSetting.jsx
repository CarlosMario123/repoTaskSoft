import setting from "../../assets/settings.gif"
import { Link } from "react-router-dom"
export default function ImgSetting() {
  return (
    <Link to={"/configuracion"}>
        <img src={setting} className="w-10 h-10"/>
    </Link>

  )
}
