import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className={"col-lg-6 " + this.props.position1}>
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={this.props.src} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">{this.props.title}</h2>
                <p>{this.props.noidung}</p>
                <a href={this.props.facebook}>Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
