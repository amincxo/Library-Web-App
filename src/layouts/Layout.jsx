import React from 'react'
import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <>
        <header className={styles.header} >
            <h1>Book App</h1>
            <p><a href="http://aminborvayeh.ir">Website AminBorvayeh</a> my project React.js </p>
        </header>
        {children}
        <footer className={styles.footer} ><p>Developed By amin </p></footer>
    </>
  );
}

export default Layout