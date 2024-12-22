import React from "react";
import "./App.css";
import createClient from "openapi-fetch";

function App() {
  const client = createClient({ baseUrl: "/" });
  client.GET(
    "/api/enterprise/v1/bank/findBankByEnterpriseId/1846082559708827650",
    { headers: { token: "ODQ0ZjdjOTUxNzUwNDNjOTkxZGFkNDhlZTNhYjJmMTI=" } }
  );
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          哈哈
        </a>
      </header>
    </div>
  );
}

export default App;
