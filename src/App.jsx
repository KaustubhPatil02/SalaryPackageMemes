// import React, { useState } from "react";
// import "./App.css";

// const MemeMyDegree = () => {
//   const [degree, setDegree] = useState("");
//   const [salary, setSalary] = useState("");
//   const [meme, setMeme] = useState(null);
//   const [gifUrl, setGifUrl] = useState(null);

//   const gifs = {
//     Bachelor: "https://i.pinimg.com/originals/7c/a4/38/7ca438ffb31e762e6f359cbb2d1c5bb7.gif",
//     Master: "https://y.yarn.co/cfbfeb9e-2362-4d80-a0d4-59fffd34e828_text.gif",
//     PhD: "https://media.tenor.com/KJEg1E5JsewAAAAM/how-is-phd-going-great.gif",
//     BCA: "https://media.tenor.com/3W5PRcsU2JoAAAAM/150-rupaya-dega-phir-hera-pheri-memes.gif",
//   };

//   const memes = {
//     Bachelor: "When you realize your Bachelor's is just a stepping stone to a Master's 😂",
//     Master: "Master's degree? More like Master of Student Loans! 😅",
//     PhD: "PhD: Poor, Hungry, and Determined! 🎓",
//     BCA: "BCA: Code now, sleep later! 💻"
//   };

//   const generateMeme = () => {
//     const salaryBasedMeme =
//       salary > 100000
//         ? "That 6-figure dream job... one day. 💸"
//         : "Keep dreaming! The grind is real. 💪";

//     setMeme(`${memes[degree]} Also, ${salaryBasedMeme}`);
//     setGifUrl(gifs[degree]);
//   };

//   return (
//     <div className="app">
//       <div className="meme-container">
//         <div className="meme-section">
//           <h1>MemeMyDegree 📚😂</h1>
//           <div className="form-group">
//             <label htmlFor="degree">Select Your Degree:</label>
//             <select
//               id="degree"
//               value={degree}
//               onChange={(e) => setDegree(e.target.value)}
//             >
//               <option value="">-- Choose Degree --</option>
//               <option value="Bachelor">Bachelor's</option>
//               <option value="Master">Master's</option>
//               <option value="PhD">PhD</option>
//               <option value="BCA">BCA</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="salary">Enter Your Expected Salary (in INR):</label>
//             <input
//               type="number"
//               id="salary"
//               placeholder="Enter your dream salary"
//               value={salary}
//               onChange={(e) => setSalary(e.target.value)}
//             />
//           </div>

//           <button onClick={generateMeme}>Generate Meme</button>

//           {meme && (
//             <div className="meme-output">
//               <p>{meme}</p>
//               {gifUrl && <img src={gifUrl} alt="meme gif" className="meme-gif" />}
//             </div>
//           )}
//         </div>

//         {/* Right-side image for desktop view only */}
//         <div className="desktop-image">
//           <img
//             src="https://i.pinimg.com/originals/ba/98/d4/ba98d4917749cab6632e099faa1ee651.gif"
//             alt="Funny degree meme"
//             className="right-image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemeMyDegree;


// with this snippet from src/data.js:
import React, { useState } from "react";
import "./App.css";
import { memesData } from "./data"; // Import your memes data

const MemeMyDegree = () => {
  const [degree, setDegree] = useState("");
  const [salary, setSalary] = useState("");
  const [meme, setMeme] = useState(null);
  const [gifUrl, setGifUrl] = useState(null);

  const generateMeme = () => {
    if (!degree || !salary) {
      alert("Please select a degree and enter a salary.");
      return;
    }

    const salaryBasedMeme =
      salary > 100000
        ? "That 6-figure dream job... one day. 💸"
        : "Keep dreaming! The grind is real. 💪";

    // Get degree data
    const degreeData = memesData[degree];

    // Shuffle the gifs and funny texts
    const shuffledGifs = degreeData.gifs.sort(() => 0.5 - Math.random());
    const shuffledTexts = degreeData.funnyTexts.sort(() => 0.5 - Math.random());

    // Randomly select a meme and a gif from the shuffled arrays
    const randomGif = shuffledGifs[0]; // Take the first one after shuffling
    const randomText = shuffledTexts[0]; // Take the first one after shuffling

    setMeme(`${randomText} Also, ${salaryBasedMeme}`);
    setGifUrl(randomGif);
  };

  return (
    <div className="app">
      <div className="meme-container">
        <div className="meme-section">
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
              <option value="BCA">BCA</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="salary">Enter Your Expected Salary (in INR):</label>
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

        {/* Right-side image for desktop view only */}
        <div className="desktop-image">
          <img
            src="https://i.pinimg.com/originals/ba/98/d4/ba98d4917749cab6632e099faa1ee651.gif"
            alt="Funny degree meme"
            className="right-image"
          />
        </div>
      </div>
    </div>
  );
};

export default MemeMyDegree;
