import { Component } from 'react';
import { TrainingDayList } from './TrainingDayList';
import { TrainingStats } from './TrainingStats';
import { AddDayForm } from './AddDayForm';
import { Menu } from './Menu';

export class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        allTrainingDays: [
          {
            distance: 3.5,
            date: "2018-01-02",
            type: "indoor"
          },
          {
            distance: 5,
            date: "2018-01-04",
            type: "outdoor"
          }
        ]
      }
      this.addTrainingDay = this.addTrainingDay.bind(this);
  }

  addTrainingDay(trainingDay) {
    this.setState({
      allTrainingDays: [
        ...this.state.allTrainingDays,
        trainingDay
      ]
    })
  }

  countDays(filter) {
    const { allTrainingDays } = this.state

      return allTrainingDays.filter(day => (filter) ? day.type == filter : day).reduce((accumulator, currentValue, currentIndex) => {
        return accumulator + currentValue.distance;
    }, 0);
  }

  render() {
    return (
      <div className="app">
      <Menu />
      {(this.props.location.pathname === '/') ?
        <TrainingStats total={this.countDays()}
                       indoor={this.countDays("indoor")}
                       outdoor={this.countDays("outdoor")}
                       goal={325} /> :
        (this.props.location.pathname === '/add-training-day') ?
          <AddDayForm onNewTrainingDay={this.addTrainingDay}/> :
          <TrainingDayList trainingDays={this.state.allTrainingDays}
                           filter={this.props.params.filter}/>
      }
      </div>
    )
  }
}
