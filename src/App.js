import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        <h1 style={styles.title}>Interactive Counter App</h1>

        <h2 style={styles.counter}>{count}</h2>

        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.button, backgroundColor: "#4CAF50" }}
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>

          <button
            style={{ ...styles.button, backgroundColor: "#f39c12" }}
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>

          <button
            style={{ ...styles.button, backgroundColor: "#e74c3c" }}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        {count >= 5 && (
          <p style={styles.goal}>🎉 Goal Reached!</p>
        )}

        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.input}
        />

        <p style={styles.message}>
          Your Message: <span>{message}</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  body: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    fontFamily: "Arial",
  },

  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
    width: "400px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },

  title: {
    marginBottom: "20px",
    color: "#333",
  },

  counter: {
    fontSize: "60px",
    color: "#764ba2",
    margin: "20px 0",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  button: {
    border: "none",
    padding: "10px 15px",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    transition: "0.3s",
  },

  input: {
    width: "90%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginTop: "10px",
    fontSize: "15px",
  },

  message: {
    marginTop: "15px",
    fontSize: "18px",
    color: "#444",
  },

  goal: {
    color: "green",
    fontWeight: "bold",
    fontSize: "20px",
  },
};

export default App;