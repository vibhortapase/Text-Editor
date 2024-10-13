import "./Home.css";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import OnlineTest from "./assets/Online-test.gif";
import { useEffect, useState } from "react";

const Home = () => {
  const [isItalic, setItalic] = useState(false);
  const [isBold, setBold] = useState(false);
  const [isUD, setUD] = useState(false);
  const [buttonColors, setButtonColors] = useState({
    bold: "white",
    italic: "white",
    under: "white",
  });

  function changeBold() {
    isBold ? setBold(false) : setBold(true);
    changeColor("bold");
  }
  function changeItalic() {
    isItalic ? setItalic(false) : setItalic(true);
    changeColor("italic");
  }
  function changeUnderLine() {
    isUD ? setUD(false) : setUD(true);
    changeColor("under");
  }
  const changeColor = (button) => {
    setButtonColors((prevColors) => ({
      ...prevColors,
      [button]: prevColors[button] === "white" ? "green" : "white",
    }));
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="ls">
            <h1>Text Editor</h1>
            <img src={OnlineTest} alt="loading...." />
          </div>
          <div className="rs">
            <div className="textEditor">
              <div className="header">
                <span>
                  <FaBold
                    onClick={changeBold}
                    style={{ color: buttonColors.bold }}
                    className="icon"
                  />
                </span>
                <span>
                  <FaItalic
                    onClick={changeItalic}
                    style={{ color: buttonColors.italic }}
                    className="icon"
                  />
                </span>
                <span>
                  <FaUnderline
                    onClick={changeUnderLine}
                    style={{ color: buttonColors.under }}
                    className="icon"
                  />
                </span>
              </div>
              <textarea
                style={{
                  fontStyle: isItalic ? "italic" : "normal",
                  fontWeight: isBold ? "900" : "normal",
                  textDecorationLine: isUD ? "underline" : "none",
                }}
                className="textInput "
                placeholder="Enter text..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
