/* Vanilla JS */

const element = document.createElement("h1");
element.textContent = "Vanilla JS";
element.classList.add("title");

const root = document.querySelector("#root");

root.append(element)


/* React JS */

const header = (
    <h1 className="title-react">React JS</h1>
)

ReactDOM.render(header, root);