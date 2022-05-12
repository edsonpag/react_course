const page = (
    <div>
        <h1>Livros</h1>
        <ul>
            <li>Livro 1</li>
            <li>Livro 2</li>
            <li>Livro 3</li>
            <li>Livro 4</li>
            <li>Livro 5</li>
        </ul>
    </div>
)

// O JSX retorna um objeto, por isso deve-se usar o render
// document.getElementById("root").append(JSON.stringify(page));
ReactDOM.render(page, document.getElementById("root"));