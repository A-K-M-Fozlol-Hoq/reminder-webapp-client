import React, { useState } from 'react';
import TimezoneSelect from 'react-timezone-select';
const AddReminder = ({ loggedInEmail, setLoggedInEmail }) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [timeZone, setTimeZone] = useState('');
  // console.log(
  //   selectedTimezone,
  //   time +
  //     ':00' +
  //     selectedTimezone?.label?.split(' ')[0].split(')')[0].split('T')[1]
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedTimezone?.label
        ?.split(' ')[0]
        .split(')')[0]
        .split('T')[1]
        .split(':')[0].length === 3
    ) {
      setTimeZone(
        time +
          ':00' +
          selectedTimezone?.label?.split(' ')[0].split(')')[0].split('T')[1]
      );
    } else {
      let t = selectedTimezone?.label
        ?.split(' ')[0]
        .split(')')[0]
        .split('T')[1];
      setTimeZone(time + ':00' + t[0] + '0' + t[1] + t[2] + t[3] + t[4]);
    }
    console.log(timeZone);
    // console.log(
    //   loggedInEmail,
    //   time +
    //     ':00' +
    //     selectedTimezone?.label?.split(' ')[0].split(')')[0].split('T')[1],
    //   text,
    //   new Date(
    //     time +
    //       ':00' +
    //       selectedTimezone?.label?.split(' ')[0].split(')')[0].split('T')[1]
    //   )
    // );
    // if (text && time) {
    //   fetch('http://localhost:4000/api/add-reminder', {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json',
    //       token: `bearer ${sessionStorage.getItem('token')}`,
    //     },
    //     body: JSON.stringify({
    //       ownerEmail: loggedInEmail,
    //       reminderText: text,
    //       reminderTime: time,
    //     }),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data.msg === 'success') {
    //         alert('reminder added successfully');
    //       }
    //     });
    // } else {
    //   alert('Please! Enter all data.');
    // }
  };

  return (
    <div>
      <div
        onClick={() => {
          sessionStorage.clear();
          setLoggedInEmail('');
        }}
        className="btn btn-primary"
      >
        Logout
      </div>
      <div className="mt-5">
        <div className="select-wrapper">
          <TimezoneSelect
            value={selectedTimezone}
            onChange={setSelectedTimezone}
          />
        </div>
        <form className="w-50" style={{ marginLeft: '25%' }}>
          <div className="form-group">
            <label htmlFor="text">Reminder Text</label>
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Enter reminder text"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="reminderTime">Reminder Time (date and time):</label>{' '}
            <br />
            <input
              type="datetime-local"
              id="reminderTime"
              name="reminderTime"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-2"
            onClick={handleSubmit}
          >
            Add Reminder
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReminder;
