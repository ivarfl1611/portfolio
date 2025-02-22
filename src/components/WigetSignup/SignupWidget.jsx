"use client";
import "./SignupWidget.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function SignupWidget({ title, content, simulateNetworkRequestTime }) {
  // State to manage the email input and messages
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      // Wait for the simulated network request time
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  // Render nothing on the server to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
      <form data-testid={"signupWidget"} className={"signup-widget"} onSubmit={handleSubmit} autoComplete={"false"}>
        <h2 data-testid={"signupWidgetTitle"} className="signup-head">
          {title}
        </h2>
        {isSubscribed && (
            <p data-testid={"signupWidgetMessage"} className={"message"}>
              {message}
            </p>
        )}
        {!isSubscribed && (
            <>
              <p data-testid={"signupWidgetContent"} className="signup-contentP">
                {content}
              </p>
              <div className={"input-row"}>
                <input
                    type="email"
                    required="required"
                    data-testid={"signupWidgetInput"}
                    disabled={busy}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <button data-testid={"signupWidgetButton"} type="submit" disabled={busy}>
                  {busy ? "Joining..." : "Join"}
                </button>
              </div>
            </>
        )}
      </form>
  );
}

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};
