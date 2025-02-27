import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import games, { createPlayer } from 'reducers/games';
import styled from 'styled-components'
import Lottie from "lottie-react";
import maze from "lotties/maze";


const PlayerInput = () => {
  const [playerInputValue, setPlayerInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(games.actions.setUserName(playerInputValue));
    dispatch(createPlayer());
  }

  return (
    <InnerWrapper>
        <Lottie className="animation" animationData={maze} loop={true}/>
      <h1>Welcome to the labyrinth!</h1>
      <h3>Do you want to play a game?</h3>
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="player-input">
      Enter your name:
        <input id="player-input" required type="text" onChange={(event) => setPlayerInputValue(event.target.value)} />
      </label>
      <button type="submit">Start the game!</button>
    </form>
    </InnerWrapper>
    )
}

export default PlayerInput;

const InnerWrapper = styled.div`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
width: 50vh;
text-align: center;
height: 50vh;
color: white;

@media (min-width: 667px) {
  width: 60vh;
}

form {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input {
  width: 250px;
  height: 30px;
  margin: 20px 10px 20px 20px;
  padding: 0.5vh 2vw;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  @media (min-width: 667px) {
    width: 350px;
    height: 40px;
  }
}

label{
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
font-size: 20px;
}

h1 {
  @media (min-width: 667px) {
    font-size: 38px;
    text-align: center;
  }
}

h3{
  font-size: 24px;
  margin-top: 0;
  @media (min-width: 667px) {
    font-size: 28px;
  }
}

button{
margin: 10px;
padding: 5px;
border: solid white 2px;
border-radius: 15px;
color: white;
background: none;
padding: 7px;
font-size: 16px;
&:hover{
  background: white;
  color: black;
}

@media (min-width: 667px) {
  font-size: 22px;
  padding: 7px;
  }

}
`