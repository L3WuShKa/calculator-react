import { useState } from "react";
import Display from "./components/Display";
import ButtonsGrid from "./components/ButtonsGrid";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [value, setValue] = useState("0");
  const [stored, setStored] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  function toggleTheme() {
    setTheme(t => (t === "dark" ? "light" : "dark"));
  }

  function handleInput(input: string) {
    //clear la ecran
    if (input === "C") {
      setValue("0");
      setStored(null);
      setOperator(null);
      return;
    }

  //pt sters ,de facut pe viitor stergere la pozitie custom 
    if (input === "←") {
      setValue(prev => (prev.length > 1 ? prev.slice(0, -1) : "0"));
      return;
    }

    // radical
    if (input === "√") {
      const num = parseFloat(value);
      if (!isNaN(num)) setValue(String(Math.sqrt(num)));
      return;
    }

    //aritmetica basic
    if ("+-×÷".includes(input)) {
      setStored(value);
      setOperator(input);
      setValue("0");
      return;
    }

    
    if (input === "=") {
      if (!operator || stored === null) return;

      const expr = `${stored}${operator}`
        .replace("×", "*")
        .replace("÷", "/") + value;

      try {
        setValue(String(eval(expr)));
      } catch {
        setValue("Error");
      }

      setStored(null);
      setOperator(null);
      return;
    }

    // pt numere
    if (value === "0" && input !== ".") {
      setValue(input);
    } else {
      setValue(prev => prev + input);
    }
  }

  return (
    <div className={`app ${theme}`}>
      <button className="theme-switch" onClick={toggleTheme}>
        <span className="ball" />
      </button>

      <div className="calculator">
        <Display value={value} />
        <ButtonsGrid onButtonClick={handleInput} />
      </div>
    </div>
  );
}
