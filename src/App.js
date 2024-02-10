import React from 'react';
import './App.css';

const ObjectTemplate = ({ template }) => (
  <div className={`object ${template.type}`} style={{ backgroundColor: template.backgroundColor }}></div>
);

const SelectedItem = ({ item }) => (
  <div className={`object ${item.type}`} style={{ backgroundColor: item.backgroundColor }}></div>
);

function App() {
  const objectTemplates = [
    { type: "circle", color: "black", size: 10, dimension: 20, backgroundColor: "lightblack" },
    { type: "square", color: "blue", size: 15, dimension: 5, backgroundColor: "lightblue" },
    { type: "circle", color: "green", size: 8, dimension: 16, backgroundColor: "lightgreen" },
    { type: "square", color: "purple", size: 12, dimension: 6, backgroundColor: "lightpurple" }
  ];

  const selectedItems = [
    { ...objectTemplates[0], x: 5, y: 10, name: "circle_1" },
    { ...objectTemplates[1], x: 15, y: 25, name: "square_2" },
    { ...objectTemplates[2], x: 30, y: 40, name: "circle_3" },
    { ...objectTemplates[3], x: 8, y: 12, name: "square_4" }
  ];

  return (
    <div className="App">
      <h2>Шаблоны</h2>
      <div className="object-container">
        {objectTemplates.map((template, index) => (
          <ObjectTemplate key={index} template={template} />
        ))}
      </div>

      <h2>Предметы</h2>
      <div className="object-container">
        {selectedItems.map((item, index) => (
          <SelectedItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
