import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";

Sentry.init({
	dsn: "https://71893a24799847c8a7a9a1583c54b0dc@o4503915384406016.ingest.sentry.io/4503915388796928",
	integrations: [new BrowserTracing()],
	tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
