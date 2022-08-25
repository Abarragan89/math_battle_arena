import styles from '../styles/Layout/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div>
            <header className={styles.header}>
                <h1>Math Battle Grounds</h1>
            </header>
            {children}
            <footer className={styles.footer}>
                <p> Try out our <a
                        href="https://who-nose-that.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Trivia Maker!
                    </a>
                </p>
            </footer>
        </div>
    )
}

export default Layout
