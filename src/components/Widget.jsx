/**
 * return tab link
 * @param   {object} Objects of props
 * @return  {Component} Widget
 */

export default function Widget({title, ...props}) {
  return (
    <div>
      <h3>{title}</h3>
      {props.children}
    </div>
  )
}
