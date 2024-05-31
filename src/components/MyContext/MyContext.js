import { createContext, useContext } from 'react';
import './MyContext.css'

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="light">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <ThemeContext.Provider value="light">
        <Button>Log in</Button>
      </ThemeContext.Provider>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  console.log(theme);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}