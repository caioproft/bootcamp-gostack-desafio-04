import React, { Component } from 'react';
import face from '../../assets/face.svg';
import profile from '../../assets/user.png'
import '../Header/styles.css';

class Header extends Component {
  render() {
    return (
      <>
        <header className="main-header">
          <div className='content'>
            <a href="#">
              <img src={face} alt="Facebook logo" id="logo"></img>
            </a>
            <div className="profile">
              <a href="#">
                Meu perfil
              <img src={profile} id="profile"></img>
              </a>
            </div>
          </div>


        </header>
      </>
    )
  }
}

export default Header;