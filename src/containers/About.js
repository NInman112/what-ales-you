import React, { Component } from 'react'
import '../stylesheets/App.css';

export default class About extends Component {

  render() {
    return(
      <div>
        <div>
          <a href='https://flatironschool.com' target='_blank' rel='noopener noreferrer'><img src='FS_wiki.png' width='30%' alt='flatiron-logo'></img></a>
          <p className='aboutPTag'>
            This web application was built as a Flatiron React project and utilizes a backend Rails API which saves user data and a React frontend to provide the user interface.
          </p>
          <p>
            Icons made by
            <a href="https://www.freepik.com/?__hstc=57440181.74d1d4c08743298030ee40bd3dd04231.1557436705945.1557436705945.1557436705945.1&__hssc=57440181.1.1557436705946&__hsfp=3218011592" title="Freepik">Freepik</a> from
            <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>
          </p>
        </div>
      </div>
    )
  }
}
