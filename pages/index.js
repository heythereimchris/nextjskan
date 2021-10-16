import React from "react";

// Lazy load the component.
// It is essential that the package is not imported
// on the server but only on the client.
const App = React.lazy(() => import("../muuri-react/app"));

// Main page.
const IndexPage = () => {
  // Check if we are on the server.
  const isSSR = typeof window === "undefined";

  return (
    <div>
      {/* Render only if we are on the client. */}
      {/* Outside I can render everything on the server. */}
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <App />
        </React.Suspense>
      )}
    </div>
  );
};

export default IndexPage;
