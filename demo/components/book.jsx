import React from "react/addons";

export default class Book extends React.Component {
  render() {
    return (
      <div className="book" {... this.props}>
        <div className="image">
          <img src={this.props.src} />
        </div>
        <div className="title">
          {this.props.title}
        </div>
      </div>
    )
  }
}
