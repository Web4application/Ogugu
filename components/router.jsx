// components/Route.jsx
import { useState } from "react";

export const Route = ({
  method = "GET",
  path,
  auth = "None",
  category,
  description,
  requestBody,
  responseBody,
  deprecated = false,
  beta = false,
  rateLimit,
}) => {
  const normalizedMethod = String(method).toUpperCase();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(path);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className={`MDXRoute ${deprecated ? "deprecated" : ""}`}>
      <div className="route-header">
        <span className={`verb ${normalizedMethod.toLowerCase()}`}>
          {normalizedMethod}
        </span>

        <code className="url">{path}</code>

        {auth && <span className="badge auth">{auth}</span>}
        {category && <span className="badge category">{category}</span>}
        {beta && <span className="badge beta">Beta</span>}
        {deprecated && <span className="badge deprecated">Deprecated</span>}

        <button className="copy-btn" onClick={handleCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {description && <p className="route-description">{description}</p>}

      {rateLimit && (
        <p className="route-rate-limit">Rate Limit: {rateLimit}</p>
      )}

      {requestBody && (
        <div className="route-block">
          <h4>Request Body</h4>
          <pre><code>{requestBody}</code></pre>
        </div>
      )}

      {responseBody && (
        <div className="route-block">
          <h4>Response Body</h4>
          <pre><code>{responseBody}</code></pre>
        </div>
      )}
    </div>
  );
};
