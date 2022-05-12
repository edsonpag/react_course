function Page() {
    return(
        <div>
            <header>
                <nav>
                    <img src="../react-logo.svg" style={{ width: "4rem" }}/>
                    <h1>Razões do porque eu estou aprendendo React!</h1>
                </nav>
            </header>
            <h2>Por que aprender React?</h2>
            <ol>
                <li>Melhorar minhas skills</li>
                <li>React é maravilhoso</li>
                <li>Conseguir um emprego como desenvolvedor</li>
            </ol>
            <footer>
                <p>&copy; 2001 Pagani. Todos os direitos reservados.</p>
            </footer>
        </div>
        
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));