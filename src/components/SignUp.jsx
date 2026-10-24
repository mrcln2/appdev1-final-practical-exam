import React from 'react';
import styles from './SignUp.module.css';
import blossomImg from '../assets/blossom-flower.svg';

export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        {/* Left section empty for now */}
      </div>
      <div className={styles.rightSection}>
        <img src={blossomImg} alt="Blossom Flower" className={styles.blossomImg} />
      </div>
    </div>
  );
}