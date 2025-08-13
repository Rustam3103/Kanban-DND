import { useState } from 'react';
import './App.css';

export default function App() {
  const [draggedElement, setDraggedElement] = useState(null);

  const handleDragStart = (event) => {
    setDraggedElement(event.target);
    event.dataTransfer.setData("text", event.target.id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const element = document.getElementById(id);
    event.target.appendChild(element);
  };

  return (
    <div className="board">
      <div className="column"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <h3>📋 Надо сделать</h3>
        <div className='ticket' id="task1" draggable onDragStart={handleDragStart}>need task 1</div>
        <div className='ticket' id="task2" draggable onDragStart={handleDragStart}>need task 2</div>
      </div>

      <div className="column"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <h3>🛠 В процессе</h3>
        <div className='ticket' id="task3" draggable onDragStart={handleDragStart}>column task 1</div>
        <div className='ticket' id="task4" draggable onDragStart={handleDragStart}>column task 2</div>
      </div>

      <div className="column"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <h3>✅ Готово</h3>
        <div className='ticket' id="task5" draggable onDragStart={handleDragStart}>ready task 1</div>
        <div className='ticket' id="task6" draggable onDragStart={handleDragStart}>ready task 2</div>
      </div>
    </div>
  );
}
