import DropdownNavigation from './DropdownNavigation';
import "./Header.css";

function Header() {
    return (<div className="Header">
        <div className ="Header__Title">JEFF NORDSTROM</div>
        <div className ="Header__SubTitle">Software Developer</div>
        <DropdownNavigation/>
       
        
    </div>

    )
}

export default Header;