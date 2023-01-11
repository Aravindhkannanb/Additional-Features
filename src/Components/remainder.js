import React from "react";
import './remainder.css';
import { useState } from "react";
const Remainder=()=>{
    const [note, setNote] = useState('');
  const [currentNotes, setCurrentNotes] = useState([]);
  const [phone, setPhone] = useState('');
  const [currentphone, setcurrentphone] = useState([]);

  const handleChange = (event) => {
    setNote(event.target.value);
  }
  const handleClick = () => {
    setCurrentNotes([...currentNotes, note]);
    setcurrentphone([...currentphone,phone]);
    console.log(currentphone);
    console.log(currentNotes);
  }
  const handleChanges = (event) => {
    setPhone(event.target.value);
  }
 
    return (
        <div className="App">
          <h1>Set Remainder</h1>
          <p>A place to put your remainder details,phone number.</p>
          <div className="formHolder">
            <div className="mb-3">
              <label htmlFor='note' className='form-label'>Remainder details:</label>
              <input 
              type="text"
              className='form-control'
              id="note"
              name="note"
              placeholder='Enter a note here...'
              onChange={handleChange}
              value={note}
              />
              <br></br>
              <label htmlFor='note' className='form-label'>Phone number:</label>
              <input 
              type="text"
              className='form-control'
              id="note"
              name="note"
              placeholder='Enter a note here...'
              onChange={handleChanges}
              value={phone}
              />
              <br></br>
              <button type="button" class="btn btn-outline-primary" onClick={handleClick}>Submit</button>
            </div>
          </div>
    
          <div className="mb-3">
            {
              (currentNotes.length == 0 &&
              currentphone.length==0)
              ?
              <p>No notes to display</p>
              :
              <table>
                <thead>
                  <th>Details and Phone</th>
                </thead>
                <tbody>
                  {
                    currentNotes.map((n) => (
                      <tr>
                        <td>{n}</td>
                        
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            }
          </div>
    
        </div>
      );
}
export default Remainder;