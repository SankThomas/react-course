import React, { useState } from "react";
import { nums, lowercase, uppercase, syms } from "./data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [lowercaseLetters, setLowercaseLetters] = useState(false);
  const [uppercaseLetters, setUppercaseLetters] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const generateStrongPassword = () => {
    let generatedPassword = "";

    if (lowercaseLetters) generatedPassword += lowercase;

    if (uppercaseLetters) generatedPassword += uppercase;

    if (numbers) generatedPassword += nums;

    if (symbols) generatedPassword += syms;

    setPassword(createPassword(generatedPassword));
    toast.success("Password generated");
  };

  const createPassword = (generatedPassword) => {
    let password = "";
    const generatedPasswordLength = generatedPassword.length;

    for (let i = 0; i < passwordLength; i++) {
      const passwordIndex = Math.floor(Math.random() * generatedPasswordLength);
      password += generatedPassword.toString().charAt(passwordIndex);
    }

    return password;
  };

  const copyToClipboard = () => {
    if (!password) {
      toast.error("Nothing to copy");
    } else {
      navigator.clipboard.writeText(password);
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <>
      <ToastContainer position="bottom-right" theme="colored" />
      <div className="container">
        <h1>Password Generator</h1>

        <div className="password-generator">
          <p className="generated-password">
            {password}{" "}
            {!password ? null : (
              <button onClick={copyToClipboard} className="btn-copy">
                Copy
              </button>
            )}
          </p>

          <form onSubmit={handleSubmit}>
            <article>
              <label htmlFor="password-length">Password length</label>
              <input
                type="number"
                name="password-length"
                id="password-length"
                min={8}
                max={20}
                defaultValue={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
              />
            </article>

            <article>
              <label htmlFor="lowercase-letters">Lowercase letters</label>
              <input
                type="checkbox"
                name="lowercase-letters"
                id="lowercase-letters"
                checked={lowercaseLetters}
                onChange={(e) => setLowercaseLetters(e.target.checked)}
              />
            </article>

            <article>
              <label htmlFor="uppercase-letters">Uppercase letters</label>
              <input
                type="checkbox"
                name="uppercase-letters"
                id="uppercase-letters"
                checked={uppercaseLetters}
                onChange={(e) => setUppercaseLetters(e.target.checked)}
              />
            </article>

            <article>
              <label htmlFor="numbers">Numbers</label>
              <input
                type="checkbox"
                name="numbers"
                id="numbers"
                checked={numbers}
                onChange={(e) => setNumbers(e.target.checked)}
              />
            </article>

            <article>
              <label htmlFor="symbols">Symbols</label>
              <input
                type="checkbox"
                name="symbols"
                id="symbols"
                checked={symbols}
                onChange={(e) => setSymbols(e.target.checked)}
              />
            </article>

            <button onClick={generateStrongPassword} type="submit">
              Suggest strong password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
