function Navbar () {
    return (
        <nav>
            <h1>DoctorCare</h1>
            <ul>
                <li>Preço</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </nav>
    )
}


ReactDOM.render(<Navbar />, document.getElementById("root"));