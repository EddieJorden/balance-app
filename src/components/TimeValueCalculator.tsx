/* eslint-disable max-len */
import React from 'react';

type Props = {
  averageTimeInYears: number;
  hoursSpentWorking: number;
  hoursSpentOnNecessities: number;
  freeTimePerDay: number;
  compensationPerHour: number;
  essentialExpensesPerMonth: number;
  nonEssentialExpensesPerMonth: number;
};

type State = {
  freeTimeValuePerHour: number;
};

class TimeValueCalculator extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      freeTimeValuePerHour: 0,
    };
  }

  componentDidMount() {
    this.calculateFreeTimeValuePerHour();
  }

  calculateFreeTimeValuePerHour = () => {
    const {
      averageTimeInYears, hoursSpentWorking, hoursSpentOnNecessities, freeTimePerDay, essentialExpensesPerMonth, nonEssentialExpensesPerMonth, compensationPerHour,
    } = this.props;
    console.log('averageTimeInYears', averageTimeInYears);
    console.log('freeTimePerDay', freeTimePerDay);
    console.log('nonEssentialExpensesPerMonth', nonEssentialExpensesPerMonth);

    const totalNecessityTimePerYear = (hoursSpentOnNecessities * 365) - (essentialExpensesPerMonth / 30);
    const totalWorkTimePerYear = hoursSpentWorking * 365;
    const totalFreeTimePerYear = ((24 - hoursSpentOnNecessities) - hoursSpentWorking) * 365;
    console.log('totalFreeTimePerYear', totalFreeTimePerYear);
    const totalCompensationPerYear = (totalWorkTimePerYear * compensationPerHour);
    console.log('totalCompensationPerYear', totalCompensationPerYear);

    const totalValuePerYear = (totalFreeTimePerYear * compensationPerHour) + totalCompensationPerYear;
    const totalHoursPerYear = (totalNecessityTimePerYear + totalWorkTimePerYear + totalFreeTimePerYear);

    const freeTimeValuePerHour = totalValuePerYear / totalHoursPerYear;
    this.setState({ freeTimeValuePerHour });
  };

  render() {
    const { freeTimeValuePerHour } = this.state;
    const { compensationPerHour } = this.props;

    const freeTimeValuePerYear = freeTimeValuePerHour * 6 * 365;
    const totalIncomePerHour = freeTimeValuePerHour + compensationPerHour;
    const totalIncomePerYear = totalIncomePerHour * 24 * 365;

    return (
      <div>
        <h2>
          Free Time Value per Hour: $
          {freeTimeValuePerHour.toFixed(2)}
        </h2>
        <h2>
          Annual Free Time Value: $
          {freeTimeValuePerYear.toFixed(2)}
        </h2>
        <h2>
          Annual Income per Hour: $
          {totalIncomePerHour.toFixed(2)}
        </h2>
        <h2>
          Annual Income including free time value: $
          {totalIncomePerYear.toFixed(2)}
        </h2>
      </div>
    );
  }
}

export default TimeValueCalculator;
