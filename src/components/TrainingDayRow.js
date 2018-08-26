import Sun from 'react-icons/lib/fa/sun-o'
import Home from 'react-icons/lib/fa/home'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

export const TrainingDayRow = ({distance, date, type}) => (
    <tr>
      <td>
        {date}
      </td>
      <td>
        {distance}
      </td>
      <td>
        {(type == "outdoor") ? <Sun /> : <Home />}
      </td>
    </tr>
)

TrainingDayRow.propTypes = {
  distance: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
