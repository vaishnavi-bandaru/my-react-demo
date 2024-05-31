import { useRef, useState } from 'react';

export default function Counter() {
  let ref = useRef(0);
  const [dummy,setDummy]= useState(0);

  function handleClick() {
    setDummy(dummy+1);
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}