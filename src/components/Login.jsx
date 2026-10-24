import React from 'react';
import styles from './Login.module.css';
import googleIcon from '../assets/icons-google-logo.svg';
import appleIcon from '../assets/icons-apple-logo.svg';
import blossomImg from '../assets/blossom-flower.svg';
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Welcome back!</h1>
          <p className={styles.subtitle}>
            Enter your Credentials to access your account
          </p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelRow}>
                <label htmlFor="password">Password</label>
                <a href="#" className={styles.forgotLink}>
                  forgot password
                </a>
              </div>
              <input type="password" id="password" placeholder="Name" />
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember for 30 days</label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Login
            </button>
          </form>

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
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>

      <div className={styles.rightSection}>
        <img src={blossomImg} alt="Blossom Flower" className={styles.blossomImg} />
      </div>
    </div>
  );
}