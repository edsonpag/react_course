function Header() {
    return (
        <header>
            <nav className="navbar">
                <img src="../react-logo.svg" className="logo"/>
                <ul className="nav-items">
                    <li>Preço</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;