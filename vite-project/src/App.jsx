import { useCallback, useState } from "react";

import "./App.css";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPasword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:'", `~\"
  for(let i=1; i<=array.lenght; i++){
    let char=Math.floor(Math.random()*str.lenght +1)
    pass= str.charAt(char)
  }
  setPassword(pass)

  },[lenght,numberAllowed.charAllowed,setPasword])

  }

  return (
    <>
      <div>
      
    </>
  );
}

export default App;
