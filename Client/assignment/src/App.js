import logo from "./logo.svg";
import "./App.css";
let arr = [
  "Nudity",
  "Anti-Social",
  "Violent content",
  "Misinfromation",
  "Spam",
  "Child Abuse",
  "Harmfull or Abusive Content",
];
function App() {
  const handleClick = (tag) => {
    const data = {
      tags: tag,
      Date: new Date(),
      videoId: "assignment",
      videoTime: "",
    };
    console.log("data", data);
  };
  return (
    <div className="App">
      <h2>Assignment</h2>
      <video width="750" height="500" controls>
        <source src="https://youtu.be/buRG1eGuPIs" type="video/mp4" />
      </video>
      <div className="tags">
        {arr.map((el, i) => {
          return (
            <button key={i} onClick={() => handleClick(el)}>
              {el}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
