import React from 'react'
import { useState, useEffect } from 'react';
// import axios from 'axios'
import styles from '../styles/Home.module.css';

import Boards from '../components/Boards';
import AddNewBoard from '../components/AddNewBoard';


import verticleEllipsis from '../assets/icon-vertical-ellipsis.svg';



const Home = () => {


    // updating the visibility state of the create boards component
    const [createBoardState, setCreateBoardState] = useState(false)
    const updateBoardState = () => {
        setCreateBoardState(createBoardState => !createBoardState)
    }

  return (
    <main>
        <Boards updateBoardState={updateBoardState}/>
        
        {createBoardState && (
            <AddNewBoard updateBoardState={updateBoardState}/>
        )}
        

        <div className={styles.primary_content}>
            <section className={styles.platform_launch}>
                <h1>Platform Launch</h1>

                <div className={styles.platform_addTask_container}>
                    <button>+ Add Task</button>
                    <img alt='' src={verticleEllipsis}/>
                </div>
            </section>



            <section className={styles.task_content_empty}>
                <h2>This board is empty. Create a new column to get started.</h2>
                <button>+ Add New Column</button>
            </section>
        </div>

    </main>
  )
}

export default Home