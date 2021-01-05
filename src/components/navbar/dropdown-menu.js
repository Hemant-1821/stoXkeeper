import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

import './navbar.styles.css';

import { ReactComponent as BoltIcon } from './icons/bolt.svg';

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem>
            <NavLink to="/">
              <div className="link-text">
                <h2>StoXkeeper</h2>
                </div>
                </NavLink>
                </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>
                <NavLink to="/cardbse" >
                    <div className="link-text">Companies</div>
                </NavLink>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>
              <NavLink to="/news">
              <div className="link-text">Market News</div>
              </NavLink>
            </DropdownItem>
  
          </div>
        </CSSTransition>
      </div>
    );
  }
export default DropdownMenu;