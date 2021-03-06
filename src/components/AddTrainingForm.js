import { PropTypes } from 'react'
import { Button } from 'reactstrap'

export const AddTrainingForm = ({ distance,
                             date,
                             runType,
                             onNewTrainingDay }) => {

  let _distance, _date, _runType;

  const submit = (e) => {
    e.preventDefault();
    onNewTrainingDay({
      distance: Number(_distance.value),
      date: _date.value,
      type: _runType.value
    })

    _distance.value = '';
    _date.value = '';
    _runType.value = '';
  }

  return (
    <form onSubmit={submit} className="add-training-form">
      <div className="form-group row">
        <label htmlFor="distance" className="col-2 offset-3 col-form-label">Distance (miles)</label>
        <div className="col-3">
          <input id="distance"
                 className="form-control"
                 type="text"
                 required
                 defaultValue={distance}
                 ref={input => _distance = input}/>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="date" className="col-2 offset-3 col-form-label">Date</label>
        <div className="col-3">
          <input id="date"
                 className="form-control"
                 type="date"
                 required
                 defaultValue={date}
                 ref={input => _date = input}/>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="run-type" className="col-2 offset-3 col-form-label">Run Type</label>
        <div className="col-3">
        <select className="form-control" ref={input => _runType = input}>
          <option value="indoor">indoor</option>
          <option value="outdoor">outdoor</option>
        </select>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-5 offset-3" style={{marginTop: "2em"}}>
          <Button color="success" size="lg" block>Add Run</Button>
        </div>
      </div>
    </form>
  )
}

AddTrainingForm.propTypes = {
	distance: PropTypes.number,
	date: PropTypes.string,
	type: PropTypes.string
}
