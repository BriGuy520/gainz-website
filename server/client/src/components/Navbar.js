import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gainzLogo from '../images/gainz-logo.png';

class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = { showMenu: false, width: 0, height: 0 };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount(){
        this.updateWindowDimensions();
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions(){
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    showMenu(event){
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(){
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    renderNavbar(){
        if(window.innerWidth > 1000){
            return (
                <header>
                    <div className="dropdown-menu">
                        <img
                            className="gainz-logo" 
                            alt="Gainz Fitness" 
                            src={gainzLogo} style={{ width: '150px', height: '125px'}}
                        />
                    </div>
                    <nav className="nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#plans">Plans</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><Link to="/contact">Shop</Link></li>
                    </nav>
                </header>
            );
        } else {
            return (
                <header>
                    <div className="dropdown-menu">
                        <img 
                            alt="Gainz Fitness" 
                            src={gainzLogo} style={{ width: '65px', height: '50px'}}
                        />
                        <i onClick={this.showMenu} className="bars icon"></i>
                    </div>
                    { this.state.showMenu 
                        ? (
                            <nav 
                                className="nav-list"
                                ref={(element) => { this.dropdownMenu = element }}
                            >
                                <li><a href="#about">About</a></li>
                                <li><a href="#plans">Plans</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><Link to="/contact">Shop</Link></li>
                            </nav>

                        ) : (
                            null
                        )
                    }
                </header>
            );
        }
    }

    render(){
        return (
            <div>
                {this.renderNavbar()}
            </div>
        );
    }
}

export default Navbar;