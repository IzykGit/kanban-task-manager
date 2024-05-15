import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/components/AddNewBoard.module.css';

import iconCross from '../assets/icon-cross.svg';

const AddNewBoard = ({ updateBoardState }) => {

  // keeping track of board name for query parameter
  const [boardName, setBoardName] = useState("")

  // keeping track of amount of input fields
  const [inputFields, setInputFields] = useState([''])


  // adding input fields for more board columns
  const addInputField = () => {
    if(inputFields.length < 3) {
      setInputFields([...inputFields, ''])
    }
    else {
      return
    }
  }


  // handling change of the columns inputs
  const handleInputChange = (index, event) => {
    const newInputFields = inputFields.map((input, i) => 
      i === index ? event.target.value : input
    );
    setInputFields(newInputFields);
  };

  const handleDeleteInput = (index) => {
    if(inputFields.length > 1) {
      const newInputFields = inputFields.filter((_, i) => i !== index);
      setInputFields(newInputFields);
    }
    else {
      return
    }

  };



  const formUpload = async () => {

    //filtering out empty input fields
    const columns = inputFields.filter(input => input.trim() !== '');

    const queryParams = new URLSearchParams({
      boardName,
      columns: JSON.stringify(columns)
    }).toString();


    await axios.post(`/api/boards/${queryParams}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => {
        console.log('Created board', data);
        updateBoardState();
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className={styles.add_board_main}>

        <div className={styles.add_board_form}>

            <div className={styles.board_close}>
              <h1>Add New Board</h1>

              {/* button closes board form incase of accidental click */}
              <button type='button' onClick={updateBoardState}><img alt='Close' src={iconCross}/></button>
            </div>



            {/* form for creating boards */}

            <form method='' className={styles.board_form}>

                <div className={styles.board_name}>
                    <label>Name</label>
                    <input name='name' onChange={e => setBoardName(e.target.value)} type='text' placeholder='e.g. Web Design' required/>
                </div>

                <div className={styles.add_column}>
                  <label>Columns {inputFields.length} of 3</label>

                  {/* column input fields */}

                  {inputFields.map((input, index) => (
                      <div  key={index} className={styles.task_status}>
                          <input name='column' type='text' value={input} onChange={e => handleInputChange(index, e)} required/>
                          <button type='button' onClick={() => handleDeleteInput(index)}><img alt='Close' src={iconCross}/></button>
                      </div>
                  ))}



                </div>

                <div className={styles.board_buttons}>

                    {/* this button adds another column to the board form */}
                    <button type='button' onClick={addInputField}>+ Add New Column</button>

                    {/* this button submits the board form, creating a post request to the database */}
                    <button type='submit'>Create New Board</button>
                </div>

            </form>

        </div>

    </div>
  )
}

export default AddNewBoard