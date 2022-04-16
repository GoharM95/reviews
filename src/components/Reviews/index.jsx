import React from "react";
import "./Reviews.css";
import people from "../../data";

class Reviews extends React.Component {
  state = { index: 0 };

  // checks if it is the last index or is < 0 to navigate transition
  checkIndex = (index) => {
    // const { index } = this.state;
    if (index > people.length - 1) {
      this.setState({ index: 0 });
    }

    if (index > 0) {
      this.setState({ index: people.length - 1 });
    }

    this.setState({ index });
  };

  // how to use componentDidMount to update my index
  prevPerson = (index) => {
    const prevIndex = index - 1;
    this.setState({ index: prevIndex });
  };

  nextPerson = (index) => {
    const nextIndex = index + 1;
    this.setState({ index: nextIndex });
  };

  componentDidMount() {}

  //   randomPerson = () => {
  //     const randomIndex = Math.floor(Math.random() * people.length);
  //     this.setState((index) => this.checkIndex(randomIndex));
  //   };

  render() {
    const person = people[this.state.index];
    console.log(person);
    const { id, name, job, image, text } = person;
    console.log(id);

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
            <button onClick={this.prevPerson}>previous</button>
            <button onClick={this.nextPerson}>next</button>
          </div>

          <button onClick={this.randomPerson}>surprise me</button>
        </div>
      </div>
    );
  }
}

export default Reviews;
