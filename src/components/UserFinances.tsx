import { useState } from 'react';
import StyledContainer from './ComponentContainer';

function UserFinances() {
  const [monthlyIncome, setMonthlyIncome] = useState(10000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(4500);
  const monthlySavings = monthlyIncome - monthlyExpenses;
  const [investmentReturn, setInvestMentReturn] = useState(5);
  const [retirementAmount, setRetirementAmount] = useState(2000000);

  const updateMonthlyIncome = (e: any) => {
    setMonthlyIncome(Number(e.target.value));
  };
  const updateMonthlyExpenses = (e: any) => {
    setMonthlyExpenses(Number(e.target.value));
  }; const updateRetirementAmount = (e: any) => {
    setRetirementAmount(Number(e.target.value));
  };

  const updateInvestMentReturn = (e: any) => {
    setInvestMentReturn(Number(e.target.value));
  };

  const monthsTillRetirement: any = (currentSavings: any = 0, months: any = 0) => {
    if (currentSavings >= retirementAmount) return months;
    if (monthlySavings <= 0) return 0;
    const newSavings = currentSavings + monthlySavings;
    const newSavingsWithInterest = newSavings + ((newSavings * (investmentReturn / 100)) / 12);
    const newMonths = months + 1;

    return monthsTillRetirement(newSavingsWithInterest, newMonths);
  };

  return (
    <StyledContainer>
      <div style={{ fontWeight: 'bold' }}>Lets take a look at our finances</div>
      <div style={{ fontWeight: 'bold' }}>
        With a monthly income of $
        <input defaultValue={monthlyIncome} onChange={updateMonthlyIncome} />
      </div>
      {' '}
      <div style={{ fontWeight: 'bold' }}>
        and monthly expenses of $
        <input defaultValue={monthlyExpenses} onChange={updateMonthlyExpenses} />
      </div>
      <div style={{ fontWeight: 'bold' }}>
        {monthlyIncome > monthlyExpenses ? 'We are making enough money' : 'we are not making enough money'}
      </div>
      <div style={{ fontWeight: 'bold' }}>
        <div>With monthly savings of</div>
        $
        {monthlySavings}
        {' '}
        <div>
          and a retirement goal of $
          <input defaultValue={retirementAmount} onChange={updateRetirementAmount} />
        </div>
        <div>
          and a return on investment of
          <br />
          <input defaultValue={investmentReturn} onChange={updateInvestMentReturn} style={{ width: '30px' }} />
          %
        </div>

        {' '}
        <div>
          your time till retire is
          <div>
            {monthsTillRetirement()}
            {' '}
            months or
            {' '}
            {Math.floor(monthsTillRetirement() / 12)}
            years
          </div>
        </div>
        <div />
      </div>

      <div />
    </StyledContainer>
  );
}

export default UserFinances;
