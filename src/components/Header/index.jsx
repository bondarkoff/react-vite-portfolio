import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="menu">
                    <div className="menu__logotype">
                        <a href="#">bondarkoff.</a>
                    </div>
                    <nav>
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="#">HOME</a>
                            </li>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="#">WORK</a>
                            </li>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="#">SKILLS</a>
                            </li>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="#">ABOUT</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;