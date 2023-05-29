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
    const video = document.querySelector("#video");
    video.pause();
    let videoTime = video.currentTime;
    videoTime = (videoTime / 60).toFixed(2);
    const data = {
      tags: tag,
      Date: new Date(),
      videoId: "demo-id",
      videoTime,
    };

    fetch(`http://localhost:8080/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((re) => re.json())
      .then((re) => {
        console.log("Data Added Succesfully", re);
        const toast = document.querySelector(".toast");
        toast.innerText = "Data Send Successfully";
        toast.style.display = "block";
        setTimeout(() => {
          toast.innerText = "";
          toast.style.display = "none";
        }, 2000);
        video.play();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <h2>Assignment</h2>
      <video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width="750"
        height="500"
        controls
        id="video"
      ></video>
      <div className="tags">
        {arr.map((el, i) => {
          return (
            <button key={i} onClick={() => handleClick(el)}>
              {el}
            </button>
          );
        })}
      </div>
      <div className="toast"></div>
    </div>
  );
}

export default App;
