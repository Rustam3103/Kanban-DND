import logo from './logo.svg';
import './App.css';

function App() {

  const handleDragStart = (event) => {
    event.dataTransfer.setData("imageID", event.target.image)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img id="imageID" draggable onDragStart={(event) => handleDragStart(event)}
          src={logo} width={200} height={200} alt="logo" />
        <div
          onDragOver={(event) => { event.preventDefault() }}
          onDrop={(event) => { event.preventDefault(); event.target.appendChild(document.getElementById("imageID")); }}
          width={250}
          height={250}
          style={{ border: "1px solid red", width: "250px", height: "250px" }}>
          Перетаҳи сюда
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
