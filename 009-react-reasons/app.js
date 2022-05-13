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

function Main() {
    return (
        <main>
            <h1>Razões do porque eu estou aprendendo React!</h1>
            <ul className="main-items">
                <li>Melhorar minhas skills</li>
                <li>React é maravilhoso</li>
                <li>Conseguir um emprego como desenvolvedor</li>
            </ul>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <p>&copy; 2001 Pagani. Todos os direitos reservados.</p>
        </footer>
    )
}


function Page() {
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
        
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));