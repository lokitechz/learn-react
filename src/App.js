import React, { Component } from 'react';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Header/>
        <Content title='Mai Anh Thư' position1='order-lg-2' src='img/mat.jpg' noidung='Nickname Nặc Nô' facebook='https://www.facebook.com/anhthu.cva.dav'/>
        <Content title='Nguyễn Thu Thủy' src='img/ntt.jpg' noidung='Nickname Thủy Tít' facebook='https://www.facebook.com/nguyenthuthuy2611'/>
        <Content title='Vũ Lệ Thủy' position1='order-lg-2' src='img/vlt.jpg' noidung='Nickname Tỉn' facebook='https://www.facebook.com/thuyvu285'/>
        <Content title='Lê Đạt' src='img/dat.jpg' noidung='Nickname Đạt khoai' facebook='https://www.facebook.com/ledat.upem'/>
        <Content title='Nam' position1='order-lg-2' src='img/nam.jpg' noidung='Nickname Dav' facebook='https://www.facebook.com/thanhnam.vu.946'/>
        <Footer/>
      </div>
    );
  }
}

export default App;
