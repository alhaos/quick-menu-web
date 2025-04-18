import styles from './commonButton.module.css';

function CommonButton(prop) {
  return <button className={styles.CommonButton}>{prop.text}</button>;
}

export default CommonButton;
