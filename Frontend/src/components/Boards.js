import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import styles from '../styles/components/Boards.module.css';

import logodark from '../assets/logo-dark.svg';
import boardIcon from '../assets/icon-board.svg';

import darkTheme from '../assets/icon-dark-theme.svg';
import lightTheme from '../assets/icon-light-theme.svg';

import hideSidebar from '../assets/icon-hide-sidebar.svg';

const Boards = ({ updateBoardState }) => {

    const [boards, setBoards] = useState([])


    // fetches mongodb collections, collections represent boards
    useEffect(() => {
        async function getBoards() {
            const response = await axios.get('http://localhost:5000/');
            const data = response.data;
            setBoards(data)
            console.log(boards)
        }

        getBoards()
    }, [])


    return (
        <aside className={styles.board_menu}>
            <div>
                <div className={styles.logo_container}>
                    <img src={logodark} alt='Kanban' className={styles.logo}/>
                </div>
                <div className={styles.boards_container}>
                    <p>ALL BOARDS ({boards.length})</p>

                    {boards.map(board => (
                        <div key={board.name} className={styles.board}>
                            <img src={boardIcon} alt=''/>
                            <button className={styles.board_select}>{board.name}</button>
                        </div>
                    ))}
                    

                    <div className={styles.create_board}>
                        <img src={boardIcon} alt=''/>
                        <button className={styles.create_button} onClick={updateBoardState}>+ Create Board</button>
                    </div>
                </div>

            </div>


            <div className={styles.theme_hide}>

                <div className={styles.dark_mode_container}>
                    <img alt='Light Mode' src={lightTheme}/>
                    <button><div></div></button>
                    <img alt='Dark Mode' src={darkTheme}/>
                </div>

                <div className={styles.hide_sidebar_container}>
                    <img alt='Hide Sidebar' src={hideSidebar}/>
                    <p>Hide Sidebar</p>
                </div>

            </div>

        </aside>
    )
}

export default Boards