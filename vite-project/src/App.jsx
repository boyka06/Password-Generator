import { useCallback, useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:'\"`~\\";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-800">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-transparent text-white"
            placeholder="Generated Password"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-4 py-2"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
