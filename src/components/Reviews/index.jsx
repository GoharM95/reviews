import React, { useState } from "react";
import "./Reviews.css";
import people from "../../data";

class Reviews extends React.Component {
  state = { index: 0 };

  checkIndex = (index) => {
    if (index > people.length - 1) {
      this.setState({ index: 0 });
    } else if (index < 0) {
      this.setState({ index: people.length - 1 });
    } else {
      this.setState({ index });
    }
  };

  handlePrevBtnClick = () => {
    const { index } = this.state;
    this.checkIndex(index - 1);
  };

  handleNextBtnClick = (index) => {
    this.checkIndex(index + 1);
  };

  handleRandomBtnClick = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    this.checkIndex(randomIndex);
  };

  render() {
    const person = people[this.state.index];
    const { index } = this.state;
    const { id, name, job, image, text } = person;

    return (
      <div className="person" key={id}>
        <div className="name">
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <h3>{job}</h3>
          <p>{text}</p>
          <div className="buttons">
            <button onClick={this.handlePrevBtnClick}>previous</button>
            <button onClick={() => this.handleNextBtnClick(index)}>next</button>
          </div>

          <button onClick={this.handleRandomBtnClick}>surprise me</button>
        </div>
      </div>
    );
  }
}

export default Reviews;

// const Review = () => {
//   const [index, setIndex] = useState(0);
//   const { name, job, image, text } = people[index];
//   const checkNumber = (number) => {
//     if (number > people.length - 1) {
//       return 0;
//     }
//     if (number < 0) {
//       return people.length - 1;
//     }
//     return number;
//   };
//   const handleNextBtnClick = () => {
//     setIndex((index) => {
//       let newIndex = index + 1;
//       return checkNumber(newIndex);
//     });
//   };
//   const handlePrevBtnClick = () => {
//     setIndex((index) => {
//       let newIndex = index - 1;
//       return checkNumber(newIndex);
//     });
//   };
//   const handleRandomBtnClick = () => {
//     let randomNumber = Math.floor(Math.random() * people.length);
//     if (randomNumber === index) {
//       randomNumber = index + 1;
//     }
//     setIndex(checkNumber(randomNumber));
//   };

//   return (
//     <div className="container">
//       <div className="image">
//         <img src={image} alt={name} />
//       </div>
//       <div className="info">
//         <h4>{name}</h4>
//         <p>{job}</p>
//         <p>{text}</p>
//         <div className="buttons">
//           <button onClick={handlePrevBtnClick}>previous</button>
//           <button onClick={handleNextBtnClick}>next</button>
//         </div>
//         <button onClick={handleRandomBtnClick}>surprise me</button>
//       </div>
//     </div>
//   );
// };

// export default Review;
