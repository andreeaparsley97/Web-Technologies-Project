import React from 'react';
import Home from './App';
import Contact from './Contact';
import Discography from './Discography';
import Samples from './Samples';
import { Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component {
    render(){
        let pages = [
            {name: 'Home',
                num: 1},
            {name: 'Discography',
                num: 2},
            {name: 'Samples',
                num: 3},
            {name: 'Contact',
                num: 4},
        ];
        return (
            <div className="navbar">
                <ul className="c-list">
                    {pages.map((page, index) => <NavbarItem key={index} page={page}/>)}
                </ul>
            </div>
        )};
};


class NavbarItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li className={`c-list__item c-list__item--${this.props.page.num}`}>
                <Link to={"/" + this.props.page.name} className={`c-list__link c-list__link--${this.props.page.num}`}>{this.props.page.name}</Link>
            </li>
        )
    }
};

export default Navbar;