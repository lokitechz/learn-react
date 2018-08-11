import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">Friend Forever</h1>
                        <h2 className="masthead-subheading mb-0">Những hình ảnh đẹp về những người bạn của tôi</h2>
                        <a href="https://www.facebook.com/vuachom94" className="btn btn-primary btn-xl rounded-pill mt-5">Xem thêm</a>
                    </div>
                </div>
                <div className="bg-circle-1 bg-circle" />
                <div className="bg-circle-2 bg-circle" />
                <div className="bg-circle-3 bg-circle" />
                <div className="bg-circle-4 bg-circle" />
            </header>
        );
    }
}

export default Header;