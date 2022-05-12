function Main() {
    return (
        <h1>Meu primeiro componente</h1>
    )
}

function List() {
    return(
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    )
}


ReactDOM.render(
    <div>
        <Main />
        <List />
    </div>,
    document.getElementById("root")
);