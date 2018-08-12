import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0
    };
  }

  renderButton = () => (
    <div className="col-12">
      <div className="btn btn-group">
        <button type="button" className="btn btn-info no-border-radius mgr-25" onClick={() => this.changeStatusTo1()}>
          Xem thông tin
        </button>
        <button type="button" className="btn btn-danger no-border-radius">
          Xóa thông tin
        </button>
      </div>
    </div>
  );

  renderForm = () => (
    <div className="col-12">
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input type="text" className="form-control" />
        </div>
        <button type="button" className="btn btn-success mb-2 no-border-radius" onClick={() => this.changeStatusTo0()}>
          Lưu thông tin
        </button>
      </form>
    </div>
  );

  checkStatus = () => {
    if (this.state.status === 0) {
      return this.renderButton();
    }else{
      return this.renderForm();
    }
  };

  changeStatusTo1 = () =>{
    this.setState({status:1});
  }
  changeStatusTo0 = () =>{
    this.setState({status:0});
  }

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
                {this.checkStatus()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
