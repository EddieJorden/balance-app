import { useState } from 'react';
import StyledContainer from './ComponentContainer';

function UserFinances() {
  const [monthlyIncome, setMonthlyIncome] = useState(10000);
  console.log('monthlyIncome in state', monthlyIncome);
  const [monthlyExpenses, setMonthlyExpenses] = useState(4500);
  const monthlySavings = monthlyIncome - monthlyExpenses;
  const [investmentReturn, setInvestMentReturn] = useState(0.05);
  console.log('investmentReturn in state', investmentReturn);
  const [retirementAmount, setRetirementAmount] = useState(2000000);
  console.log('amount needed to retire', retirementAmount);

  const updateMonthlyIncome = (e: any) => {
    console.log(`monthly income e.target.value $${e.target.value}`);
    setMonthlyIncome(Number(e.target.value));
  };

  const updateMonthlyExpenses = (e: any) => {
    console.log(`monthly expenses $${e.target.value}`);
    setMonthlyExpenses(Number(e.target.value));
  };
  const updateRetirementAmount = (e: any) => {
    setRetirementAmount(Number(e.target.value));
  };

  const updateInvestMentReturn = (e: any) => {
    setInvestMentReturn(Number(e.target.value) / 100);
  };

  const monthsTillRetirement: any = (currentSavings: any = 0, months: any = 0) => {
    if (currentSavings >= retirementAmount) return months;
    const newSavings = currentSavings + monthlySavings;
    const newSavingsWithInterest = newSavings + ((newSavings * investmentReturn) / 12);
    const newMonths = months + 1;
    console.log('newSavings', newSavingsWithInterest);
    console.log(investmentReturn);
    return monthsTillRetirement(newSavingsWithInterest, newMonths);
  };

  // const monthsTillRetirement: any = () => {
  //   let currentSavings = 0;
  //   let currentMonths = 0;
  //   currentMonths += 1;
  //   currentSavings += monthlySavings + (monthlySavings * (investmentReturn / 100));

  //   return `${currentMonths} months with ${currentSavings} savings`;
  // };

  return (
    <StyledContainer>
      <div style={{ fontWeight: 'bold' }}>Lets take a look at our finances</div>
      <div style={{ fontWeight: 'bold' }}>
        With a monthly income of $
        {monthlyIncome}
      </div>
      {' '}
      <div style={{ fontWeight: 'bold' }}>
        and monthly expenses of $
        {monthlyExpenses}
      </div>
      <div style={{ fontWeight: 'bold' }}>
        {monthlyIncome > monthlyExpenses ? 'We are making enough money' : 'It looks like we are not making enough money for our expenses,  lets have a closer looks and see what we can do.'}
      </div>
      <div style={{ fontWeight: 'bold' }}>
        <div>With monthly savings of</div>
        $
        {monthlySavings}
        {' '}
        <div>
          and a retirement goal of $
          {retirementAmount}
        </div>

        {' '}
        <div>
          your time till retire is
          <div>
            {monthsTillRetirement()}
            {' '}
            months or
            {monthsTillRetirement() / 12}
            years
          </div>
        </div>
        <div />
      </div>
      <br />
      <div>monthly income</div>
      <input defaultValue={monthlyIncome} onChange={updateMonthlyIncome} />
      <br />
      <div>monthly expenses</div>
      <input defaultValue={monthlyExpenses} onChange={updateMonthlyExpenses} />
      <br />
      <div>Amount to retire</div>
      <input defaultValue={retirementAmount} onChange={updateRetirementAmount} />
      <div>
        income from saving with
        <input defaultValue={investmentReturn} onChange={updateInvestMentReturn} style={{ width: '30px' }} />
        percent return
      </div>
      <div />
    </StyledContainer>
  );
}

export default UserFinances;
