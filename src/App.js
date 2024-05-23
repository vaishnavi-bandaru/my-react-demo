import './App.css';

function App() {
  const frens = [
    {'name':'Saurabh', 'place':'Benglur', 'color':"Blue"},
    {'name':'Base', 'place':'Champapet', 'color':"Magenta"},
    {'name':'Winni', 'place':'Sanga', 'color':"Green"},
    {'name':'Kobs', 'place':'Asan', 'color':"Purple"},
  ];
  const listFrens = frens.map(fren =>
      <li style={{color:fren.color}}>
        {fren.name}
      </li>
  );
  return (
      <>
        <h1>Frens</h1>
        <ul>{listFrens}</ul>
      </>

  );
}

export default App;