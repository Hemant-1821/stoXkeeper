import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

import './navbar.styles.css';

import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
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
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="market">
              <div className="link-text">Market</div>
            </DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings">
                <div className="link-text">More</div>
            </DropdownItem>
  
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'market'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2 className="link-text">Market</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>
                    <NavLink to="/cardbse" >
                        <div className="link-text">COMPANIES</div>
                    </NavLink>
                </DropdownItem>
            {/* <DropdownItem leftIcon={<BoltIcon />}>
                <div className="link-text">NASDAQ</div>
            </DropdownItem> */}
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2 className="link-text">More</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>
              <NavLink to="/news">
              <div className="link-text">Market News</div>
              </NavLink>
              </DropdownItem>
            {/* <DropdownItem leftIcon={<BoltIcon />}>
            <NavLink to="/companydetails">
              <div className="link-text">Company Chart</div>
            </NavLink>
            </DropdownItem> */}
            <DropdownItem leftIcon={<BoltIcon />}>
              <NavLink to="/login">
                <div className="link-text">Login</div>
              </NavLink>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}></DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }
export default DropdownMenu;