import React, { useState } from "react";
import "./App.css";

const MemeMyDegree = () => {
  const [degree, setDegree] = useState("");
  const [salary, setSalary] = useState("");
  const [meme, setMeme] = useState(null);
  const [gifUrl, setGifUrl] = useState(null);

  const gifs = {
    Bachelor: "https://i.pinimg.com/originals/7c/a4/38/7ca438ffb31e762e6f359cbb2d1c5bb7.gif", // replace with actual GIFs
    Master: "https://y.yarn.co/cfbfeb9e-2362-4d80-a0d4-59fffd34e828_text.gif",
    PhD: "https://media.tenor.com/KJEg1E5JsewAAAAM/how-is-phd-going-great.gif",
  };

  const generateMeme = () => {
    const memes = {
      Bachelor: "When you realize your Bachelor's is just a stepping stone to a Master's 😂",
      Master: "Master's degree? More like Master of Student Loans! 😅",
      PhD: "PhD: Poor, Hungry, and Determined! 🎓",
    };

    const salaryBasedMeme =
      salary > 100000
        ? "That 6-figure dream job... one day. 💸"
        : "Keep dreaming! The grind is real. 💪";

    setMeme(`${memes[degree]} Also, ${salaryBasedMeme}`);
    setGifUrl(gifs[degree]);
  };

  return (
    <div className="app">
      <h1>MemeMyDegree 📚😂</h1>
      <div className="form-group">
        <label htmlFor="degree">Select Your Degree:</label>
        <select
          id="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        >
          <option value="">-- Choose Degree --</option>
          <option value="Bachelor">Bachelor's</option>
          <option value="Master">Master's</option>
          <option value="PhD">PhD</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="salary">Enter Your Expected Salary (in USD):</label>
        <input
          type="number"
          id="salary"
          placeholder="Enter your dream salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>

      <button onClick={generateMeme}>Generate Meme</button>

      {meme && (
        <div className="meme-output">
          <p>{meme}</p>
          {gifUrl && <img src={gifUrl} alt="meme gif" className="meme-gif" />}
        </div>
      )}
    </div>
  );
};

export default MemeMyDegree;
