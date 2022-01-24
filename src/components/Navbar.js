import CartWidget from './CartWidget.js'
import { NavLink } from 'react-router-dom';

const itemNum = 0;

const Navbar = ({links}) => {

    function captalizeElementsString( string ) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <NavLink to='/'>
                <h1>
                    <span>D</span>&<span>D</span> Fifth Edition
                </h1>
            </NavLink>
            <nav>
                <ul>
                    {links.map((element, index) => {
                        return <NavLink key={element.id} to={element.href}> <li> {captalizeElementsString(element.name)}</li> </NavLink>
                    })}
                </ul>
                <NavLink to='/cart'>
                    < CartWidget itemNum='0' ></CartWidget>
                </NavLink>
            </nav>
        </>
    )
}

export default Navbar;