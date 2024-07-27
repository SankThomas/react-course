import { useState, useEffect } from "react";

export default function useFetch() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const res = await fetch(
        "https://api.github.com/repos/rails/rails/issues"
      );
      const data = await res.json();
      setIssues(data);
    };

    fetchIssues();
  }, []);

  return issues;
}
