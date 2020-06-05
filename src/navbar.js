import React from 'react';
import App from './App';
import Contact from './Contact';
import Discography from './Discography';
import { Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
                <Switch>
                 <Route exact path={"/"+this.props.page.name}
                  component={this.props.page.name} />
                </Switch>
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