import React, { Component } from "react";

// Components
import Ball from "./Ball";
import Powerball from "./Powerball";

// Styled Components
import { Container, Button } from "./styled-components";

class Lottery extends Component {
  static defaultProps = {
    title: "Powerball",
    numBallsNorm: 5,
    maxNumNorm: 69,
    maxNumPower: 26
  };
  
  state = {
    nums: Array.from({ length: this.props.numBallsNorm }),
    power: null
  };
  
  // Call the functions
  handleClick = () => {
    this.generateNorm();
    this.generatePowerball();
  }

  // random num generator for regular balls
  generateNorm = () => {
    let tempArr = [];
      this.state.nums.forEach((num) => {
        tempArr.push(Math.floor(Math.random() * this.props.maxNumNorm) + 1)
      });
      // sort from lowest to highest
      tempArr = tempArr.sort(this.sortNumber);
      // check for duplicates
      tempArr = this.checkDuplicates(tempArr);
      // set the state
    this.setState({
      nums: tempArr
    });
  }

  // Sort from lowest int to highest
  sortNumber = (a,b) => {
    return a - b;
  }

  // Checks the random nums for duplicates
  checkDuplicates = (arr) => {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === arr[i+1]){
        arr[i+1] += 1;
      }
    }
    return arr.sort(this.sortNumber);
  }

  // generates the random num for powerball
  generatePowerball= () => {
    let num = this.props.maxNumPower;
    let randomNum = Math.floor(Math.random() * num) + 1
    this.setState({
      power: randomNum
    });
  }

  render() {
    return (
      <Container className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
            <Powerball num={this.state.power} />
        </div>
        <Button onClick={this.handleClick}>Generate</Button>
      </Container>
    );
  }
}

export default Lottery;
