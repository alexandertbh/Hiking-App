import styles from './styles.css'

export default function HikingForm () {
    return (
        <form className={styles.form}>
            <label>
                Username 
                <input type='text' name='Username'></input>
            </label>
            <label>
                Password 
                <input type='password' name='password'></input>
            </label>
            <label>
                Email 
                <input type='email' name='email'></input>
            </label>
            <input type="submit" name="Submit"></input>
        </form>
    )
}