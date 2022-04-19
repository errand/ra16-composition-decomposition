import News from "./News";
import Currencies from "./Currencies";
import Widgets from "./Widgets";

export default function Yandex() {

  const Promo = () => {
    return (
      <div>Promo</div>
    )
  }
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
  const Search = () => {
    return (
      <div>Поиск и подсказки</div>
    )
  }
  const Ads = () => {
    return (
      <div>Реклама</div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="news">
          <News section="section" />
          <Currencies/>
        </div>
        <div className="promo">
          <Promo/>
        </div>
      </div>
      <Sections/>
      <div className="searchLine">
        <Logo/>
        <Search/>
      </div>
      <div className="ads">
        <Ads/>
      </div>
      <div className="widgets">
        <Widgets/>
      </div>
    </div>
  );
}
