import React from 'react';
import Discography from './discography';
import App from './App';

class Navbar extends React.Component {
    render(){
        let pages = [
            {name: 'Contact',
                num: 1},
            {name: 'Gardening',
                num: 2},
            {name: 'Discography',
                num: 3},
            {name: 'Home',
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
                <a className={`c-list__link c-list__link--${this.props.page.num}`} href="#">{this.props.page.name}</a>
            </li>
        )
    }
}

// class Navbar extends React.Component{
//   render() {
//       return (
//       <div class="navbar">
//         <a href="">Home</a>
//         <a href="./discography">Discography</a>
//         <a href="">Gardening</a>
//         <a href="">Contact</a>
//       </div>
//       );
//   }
// }

export default Navbar;