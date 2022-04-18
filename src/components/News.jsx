import Tabs from "./Tabs";
import NewsList from "./NewsList";

export default function News(props) {
  return (
    <div className="news">
      <Tabs />
      <NewsList />
    </div>
  )
}
