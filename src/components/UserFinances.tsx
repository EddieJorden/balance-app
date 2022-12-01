import { useState } from 'react';

function UserFinances() {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [hoursPerWeek, setHoursPerWeek] = useState(0);
  // const [] = useState(0)

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

  return (
    <div>
      <div>user finances here</div>
      <br />
      <div>monthly income</div>
      <input defaultValue={monthlyIncome} onChange={updateMonthlyIncome} />
      <br />
      <div>monthly expenses</div>
      <input defaultValue={monthlyExpenses} onChange={updateMonthlyExpenses} />
      <br />
      <div>hours per week</div>
      <input defaultValue={hoursPerWeek} onChange={updateHoursPerWeek} />
    </div>
  );
}

export default UserFinances;
