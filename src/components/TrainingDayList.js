import Sun from 'react-icons/lib/fa/sun-o';
import Runner from 'react-icons/lib/md/directions-run';
import Calendar from 'react-icons/lib/fa/calendar';
import { TrainingDayRow } from './TrainingDayRow';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import { Table } from 'reactstrap';

export const TrainingDayList = ({trainingDays, filter}) => {
    const filteredDays = (!filter) ?
    trainingDays :
    trainingDays.filter(day => day.type == filter)

    return (
      <div className="training-day-list">
        <div id="table-filter" className="row pad">
          <div className="col-sm offset-sm-2">
          <Link to="/list-training-days" className="table-filter">
            All Runs
          </Link>
          </div>
          <div className="col-sm">
          <Link to="/list-training-days/indoor" className="table-filter">
            Indoor Runs
          </Link>
          </div>
          <div className="col-sm">
          <Link to="/list-training-days/outdoor" className="table-filter">
            Outdoor Runs
          </Link>
          </div>
        </div>
        <Table responsive striped>
          <thead>
            <tr>
              <th>Date</th>
              <th>Distance</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
              {filteredDays.map((trainingDay, i) =>
                <TrainingDayRow key={i}
                                {...trainingDay} />
              )}
          </tbody>
        </Table>
      </div>
    )
}

TrainingDayList.propTypes = {
  trainingDays: function(props) {
    if(!Array.isArray(props.trainingDays)) {
      return new Error("Invalid type: TrainingDayList should be an array");
    } else if(!props.trainingDays.length) {
      return new Error("Invalid input: TrainingDayList must not be empty");
    } else {
      return null;
    }
  }
}
