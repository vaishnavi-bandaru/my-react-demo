import './App.css';
import MyButton from './components/MyButton/MyButton';
import MyApp from './components/MyContext/MyContext';
import Counter from './components/MyRef/MyRef';

export default function App() {
    const clicked = true
    const buttonName = "Click Count"
    const frens = [
        {'name':'Saurabh', 'place':'Benglur', 'color':"Blue"},
        {'name':'Base', 'place':'Champapet', 'color':"Magenta"},
        {'name':'Winni', 'place':'Sanga', 'color':"Green"},
        {'name':'Kobs', 'place':'Asan', 'color':"Purple"},
    ];
    const listFrens = frens.map(fren =>
        <li key={fren.color} style={{color:fren.color}}>
            {fren.name}
        </li>
    );

    const childProp = <button>ChildButton</button>;

    return (
        <>
            {/* <h1>Frens</h1>
        <ul>{listFrens}</ul> */}
            {/* <MyButton name={buttonName} showText={clicked}/> */}
            {/* <MyApp/> */}
            <Counter/>
            {/* <MyButton name={buttonName} showText={clicked}/> */}
        </>

    );
}
