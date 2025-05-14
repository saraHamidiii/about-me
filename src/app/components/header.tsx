
import styles from "../page.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Welcome to Sara&apos;s Portfolio</h1>

      <div className={styles.contactInfo}>
        <p>Email: <a href="mailto:sarajasminehamidi@gmail.com">sarajasminehamidi@gmail.com</a></p>
        <p>Phone: <a href="tel:+9495251131">(949) 525-1131</a></p>
      </div>

      <div className={styles.buttons}>
        <a
          href="/Software_Engineering_Res.pdf"
          download
          className={styles.button}
        >
          Download Resume
        
        </a>
        <a
         href="https://github.com/saraHamidiii"
         target="_blank"
         rel="noopener noreferrer"
         className={styles.button}

        >
            Github
        </a>
        <a
          href="https://www.linkedin.com/in/sara-hamidi-517755261/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;
