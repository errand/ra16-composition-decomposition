import News from "./News";
import Currencies from "./Currencies";

export default function Yandex() {

  const Logo = () => {
    return (
      <div>Logo</div>
    )
  }
  const Sections = () => {
    return (
      <div>Список разделов</div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <News section="section" />
        <Currencies/>
      </div>
      <Sections/>
      <div className="searchLine">
        <Logo/>

      </div>
    </div>
  );
}
