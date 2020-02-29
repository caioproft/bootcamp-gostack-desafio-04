import React, { Component } from 'react';
import face from '../../assets/face.svg';
import profile from '../../assets/user.png'
import '../Header/styles.css';

class Header extends Component {
  render() {
    return (
      <>
        <nav className="header">
          <a href="#">
            <img src={face} alt="Facebook logo" id="logo"></img>
          </a>
          <a href="#" className="profile">
            <span>Meu perfil</span>
            <img src={profile} id="profile"></img>

          </a>



        </nav>
      </>
    )
  }
}

export default Header;