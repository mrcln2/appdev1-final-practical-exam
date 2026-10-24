import React from 'react';
import styles from './SignUp.module.css';
import googleIcon from '../assets/icons-google-logo.svg';
import appleIcon from '../assets/icons-apple-logo.svg';
import blossomImg from '../assets/blossom-flower.svg';

export default function SignUp() {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.formContainer}>
          {/* Part 1: Title */}
          <h1 className={styles.title}>Get Started Now</h1>

          {/* Part 2: Form */}
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Name" />
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <span>terms & policy</span>
              </label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Signup
            </button>
          </form>

          {/* Part 3: Bottom Section & Social Sign-In */}
          <div className={styles.divider}>
            <span>Or</span>
          </div>

          <div className={styles.socialGroup}>
            <button type="button" className={styles.socialBtn}>
              <img src={googleIcon} alt="Google" />
              Sign in with Google
            </button>
            <button type="button" className={styles.socialBtn}>
              <img src={appleIcon} alt="Apple" />
              Sign in with Apple
            </button>
          </div>

          <p className={styles.footerText}>
            Have an account? <a href="#">Sign In</a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <img src={blossomImg} alt="Blossom Flower" className={styles.blossomImg} />
      </div>
    </div>
  );
}