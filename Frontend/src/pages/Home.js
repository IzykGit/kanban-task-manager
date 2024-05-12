import React from 'react'
import styles from '../styles/Home.module.css'

import logodark from '../assets/logo-dark.svg'
import board from '../assets/icon-board.svg'

const Home = () => {
  return (
    <main>
          <aside className={styles.board_menu}>
                <div className={styles.logo_container}>
                    <img src={logodark} alt='Kanban' className={styles.logo}/>
                </div>


                <div className={styles.boards_container}>
                    <p>ALL BOARDS (3)</p>

                    <div className={styles.board_active}>
                        <img src={board} alt=''/>
                        <button>Placeholder</button>
                    </div>
                    <div className={styles.board}>
                        <img src={board} alt=''/>
                        <button>Placeholder</button>
                    </div>
                    <div className={styles.board}>
                        <img src={board} alt=''/>
                        <button>Placeholder</button>
                    </div>
                    <div className={styles.board}>
                        <img src={board} alt=''/>
                        <button>Placeholder</button>
                    </div>
                    

                    <div className={styles.create_board}>
                        <img src={board} alt=''/>
                        <button>+ Create Board</button>
                    </div>

                </div>
          </aside>
    </main>
  )
}

export default Home