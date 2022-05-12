/* JSX - JavaScript XML */

const page = (
    <header>
        <h1>JSX Page</h1>
        <p>Pagina sobre JSX usando React</p>
        <h2>Por que usar JSX?</h2>
        <ul>
            <li>É declaritivo</li>
            <li>É fácil</li>
        </ul>
    </header>
)


ReactDOM.render(
    page,
    document.getElementById("root")
);