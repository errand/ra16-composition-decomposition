/**
 * parent Component for Widgets
 * @return  {Component} rendered Widget
 */
import Widget from "./Widget";
export default function Widgets() {
  return (
    <div className="widget">
      <Widget title="title 1">
        <div className="body">Body 1</div>
      </Widget>
      <Widget title="title 2">
        <div className="body">Body 2</div>
      </Widget>
      <Widget title="title 3">
        <div className="body">Body 4</div>
      </Widget>
      <Widget title="title 5">
        <div className="body">Body 5</div>
      </Widget>
    </div>
  )
}
