import React, { Component } from 'react';
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

    render(){
        return (
            <div className="nav">
                <img 
                    alt="Gainz Fitness" 
                    src={gainzLogo} style={{ width: '150px', height: '125px'}}
                />
                <ul className="nav-list">
                    <li>About</li>
                    <li>Plans</li>
                    <li>Contact</li>
                    <li>Shop</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;