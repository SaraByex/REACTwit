import { useEffect, useState} from 'react';
import './App.css';


function WriteEffect() {
  const fullText = "Hello Sarah, welcome to your React journey!";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const type = () => {
      if (i < fullText.length) {
        setDisplayedText((prev) => prev + fullText[i]);
        i++;
        setTimeout(type, 300); // typing speed
      }
    };

    type();
  }, []);

return (
    <div className="App">
      <h1>{displayedText}</h1>
    </div>
);
}

export default WriteEffect;