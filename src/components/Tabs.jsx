/**
 * return full name of the user
 * @param   {array} props List of links
 * @return  {Component}   Tabs with Currency
 */

import CurrentDate from "./CurrentDate";
import Link from "./Link";

export default function Tabs(props) {

  const links = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем']

  return (
    <div className="tabs">
      <CurrentDate />
      {links.map(item => <Link title={item} />)}
    </div>
  )
}
