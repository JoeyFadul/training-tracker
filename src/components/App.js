import { Component } from 'react';
import { TrainingDayList } from './TrainingDayList';
import { TrainingStats } from './TrainingStats';
import { AddTrainingForm } from './AddTrainingForm';
import { Menu } from './Menu';
import data from '../data';

export class App extends Component {
  state = {
    allTrainingDays: []
  };

  addTrainingDay = this.addTrainingDay.bind(this);

  componentDidMount() {
    this.setState({
      allTrainingDays: data.allTrainingDays
    });
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
          <AddTrainingForm onNewTrainingDay={this.addTrainingDay}/> :
          <TrainingDayList trainingDays={this.state.allTrainingDays}
                           filter={this.props.params.filter}/>
      }
      </div>
    )
  }
}
