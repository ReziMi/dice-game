import React from 'react';
import styled from 'styled-components';

const RollDice = ({ rollDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
