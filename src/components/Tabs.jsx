/**
 * return full name of the user
 * @param   {string} firstName  First Name of the User
 * @param   {string} lastName   Last Name of the User
 * @return  {string}            Fullname of the user
 */

import CurrentDate from "./CurrentDate";

export default function Tabs(props) {

  const links = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем']

  return (
    <div className="tabs">
      <CurrentDate />
    </div>
  )
}
