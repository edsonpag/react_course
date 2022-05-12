function Header() {
    return(
        <div className="header">
            <h1>ReactJS components page</h1>
            <h2>Apreendendo React components</h2>
        </div>
    )
}

function Page() {

    /* Só pode retornar 1 elemento, nesse caso a div */
    return (
        <div>
            <h1>Essa é a minha pagina</h1>
            <h3>Por que estamos usando ReactJS?</h3>
            <ul>
                <li>Motivo 1</li>
                <li>Motivo 2</li>
                <li>Motivo 3</li>
                <li>Motivo 4</li>
                <li>Motivo 5</li>
            </ul>
        </div>

    )
}

ReactDOM.render(
    /* Só posso renderizar 1 elemento, por isso o div */
    <div>
        <Header />
        <Page />
    </div>,
    document.getElementById("root")
);