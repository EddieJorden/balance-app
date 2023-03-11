/* eslint-disable max-len */
// @ts-nocheck
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const globalStatistics = {
  averageFreeTimePerWeek: 65,
  averageTimeForObligationsPerWeek: 103,
  averageBalanceRating: 5,
};

function BalanceRating() {
  const [freeTime, setFreeTime] = React.useState(0);
  const [workTime, setWorkTime] = React.useState(0);

  const handleFreeTimeChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setFreeTime(value);
  };

  const handleWorkTimeChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setWorkTime(value);
  };

  const calculateBalanceRating = () => {
    const userBalanceRating = (freeTime / (freeTime + workTime)) * 10;
    const globalBalanceRating = globalStatistics.averageBalanceRating;
    const averageBalanceRating = (userBalanceRating + globalBalanceRating) / 2;
    return Number.isNaN(averageBalanceRating) ? 0 : averageBalanceRating.toFixed(2);
  };

  const balanceRating = calculateBalanceRating();
  const globalBalanceRating = globalStatistics.averageBalanceRating;

  let color;
  if (balanceRating < globalBalanceRating) {
    color = 'red';
  } else if (balanceRating > globalBalanceRating) {
    color = 'green';
  } else {
    color = 'yellow';
  }

  return (
    <div>
      <div>
        <label htmlFor="freeTimeInput">Hours of free time per week (hours)</label>
        <input id="freeTimeInput" type="number" onChange={handleFreeTimeChange} />
      </div>
      <div>
        <label htmlFor="workTimeInput">Hours of obligations per week, including sleep and eating (hours)</label>
        <input id="workTimeInput" type="number" onChange={handleWorkTimeChange} />
      </div>
      <div>
        <div>
          Balance Rating:
          {balanceRating}
        </div>
        <div style={{ backgroundColor: color, width: `${balanceRating * 10}%`, height: '20px' }} />
      </div>
    </div>
  );
}

export default BalanceRating;
