import '../stylesheets/ui.scss';
import Sun from 'react-icons/lib/fa/sun-o';
import Home from 'react-icons/lib/fa/home';
import Runner from 'react-icons/lib/md/directions-run';
import Star from 'react-icons/lib/md/star';
import { PropTypes } from 'react';

const decimalToPercent = (decimal) => {
  let val = (decimal * 100);
  return val.toFixed(2) + '%';
}

const calcGoalProgress = (total, goal) => {
  return decimalToPercent(total/goal);
}

export const TrainingStats = ({total, indoor, outdoor, goal}) => (
  	<div className="container justify-content-center" style={{marginTop: "5em"}}>
  		<div className="row pad">
        <div className="col-md-6 col-sm-12 training-stat">
          <Runner className="support-icon"/>
          <span> Total Miles: </span>
          <span>{total}</span>
        </div>
        <div className="col-md-6 col-sm-12 training-stat">
          <Star className="support-icon"/>
          <span> Goal Progress: </span>
          <span> {calcGoalProgress(total, goal)} </span>
        </div>
  		</div>
      <div className="row">
    		<div className="col-md-6 col-sm-12 training-stat">
          <Home className="support-icon"/>
          <span> Indoor Miles: </span>
          <span>{indoor}</span>
    		</div>
    		<div className="col-md-6 col-sm-12 training-stat">
          <Sun className="support-icon"/>
          <span> Outdoor Miles: </span>
          <span>{outdoor}</span>
    		</div>
      </div>
  	</div>
)

TrainingStats.defaultProps = {
  total: 0,
  indoor: 0,
  outdoor: 0,
  goal: 200
}

TrainingStats.propTypes = {
  total: PropTypes.number,
  indoor: PropTypes.number,
  outdoor: PropTypes.number,
  goal: PropTypes.number
}
