import { useState } from 'react';
import StyledContainer from './ComponentContainer';

function UserFinances() {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [hoursPerWeek, setHoursPerWeek] = useState(0);
  const [sleepHoursPerDay, setSleepHoursPerDay] = useState(0);
  const [eatingHoursPerDay, setEatingHoursPerDay] = useState(0);
  const [leisureHoursPerDay, setLeisureHoursPerDay] = useState(0);
  const [retirementAmount, setRetirementAmount] = useState(0);

  const updateMonthlyIncome = (e: any) => {
    console.log(`monthly income $${e.target.value}`);
    setMonthlyIncome(e.target.value);
  };
  const updateMonthlyExpenses = (e: any) => {
    console.log(`monthly expenses $${e.target.value}`);
    setMonthlyExpenses(e.target.value);
  };
  const updateHoursPerWeek = (e: any) => {
    console.log(`hours per week${e.target.value}`);
    setHoursPerWeek(e.target.value);
  };
  const updateSleepingHoursPerDay = (e: any) => {
    console.log(`sleep hours per day${e.target.value}`);
    setSleepHoursPerDay(e.target.value);
  };
  const updateEatingHoursPerDay = (e: any) => {
    console.log(`eating hours per day${e.target.value}`);
    setEatingHoursPerDay(e.target.value);
  };
  const updateLeisureHoursPerDay = (e: any) => {
    console.log(`leisure hours per day${e.target.value}`);
    setLeisureHoursPerDay(e.target.value);
  };
  const updateRetirementAmount = (e: any) => {
    console.log(`Amount needed to retire ${e.target.value}`);
    setRetirementAmount(e.target.value);
  };

  return (
    <StyledContainer>
      <div style={{ fontWeight: 'bold' }}>user finances here</div>
      <br />
      <div>monthly income</div>
      <input defaultValue={monthlyIncome} onChange={updateMonthlyIncome} />
      <br />
      <div>monthly expenses</div>
      <input defaultValue={monthlyExpenses} onChange={updateMonthlyExpenses} />
      <br />
      <div>hours per week</div>
      <input defaultValue={hoursPerWeek} onChange={updateHoursPerWeek} />
      <br />
      <div>hours sleeping per day</div>
      <input defaultValue={sleepHoursPerDay} onChange={updateSleepingHoursPerDay} />
      <br />
      <div>hours eating per day</div>
      <input defaultValue={eatingHoursPerDay} onChange={updateEatingHoursPerDay} />
      <br />
      <div>leisure hours per day</div>
      <input defaultValue={leisureHoursPerDay} onChange={updateLeisureHoursPerDay} />
      <br />
      <div>Amount to retire</div>
      <input defaultValue={retirementAmount} onChange={updateRetirementAmount} />
      <div>
        finance statistics
      </div>
      <div>
        excess monthly income
      </div>
      <div>
        monthly expenses
      </div>
      <div>
        years till retirement
      </div>
      <div>
        retirement amount
      </div>
      <div>
        income from saving with 5% return
      </div>
      <div />
    </StyledContainer>
  );
}

export default UserFinances;
