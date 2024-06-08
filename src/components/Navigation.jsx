import './Navigation.css';

const Navigation =()=>{
    return <div>
        <nav className="header">
            <div className="logo">
                <img src="/NikeLogo.jpg" alt="logo" height="100px" width="100px" />
            </div>
            <ul className="options">
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button className='bts'>Login</button>
        </nav>
    </div>
}

export default Navigation;