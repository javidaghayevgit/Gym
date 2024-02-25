import '../header/style.css'
import { NavLink, Link} from "react-router-dom";
function Header(){
    return(
        <div className='header'>
            <div className="nav-bar container">
            <Link to='/' className='brand_name'>Gu<span>time.</span></Link>
            <ul>
                <li>
            <NavLink to='/home' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "default"
  }>Home</NavLink>
                </li>
                <li>
            <NavLink to='/about' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "default"
  }>About</NavLink>
                </li>
                <li>
            <NavLink to='/classes' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "default"
  }>Classes</NavLink>
                </li>
                <li>
            <NavLink to='/blog' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "default"
  }>Blog</NavLink>
                </li>
                <li>
            <NavLink to='/gallery' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "default"
}>Gallery</NavLink>
                </li>
                <li>
            <NavLink to='/contacts' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "default"
}>Contacts</NavLink>
                </li> 
                <li>
            <NavLink to='/signUp' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "default"
}>Sign Up Today</NavLink>
                </li>
            </ul>
</div>
        </div>
    )
}
export default Header;