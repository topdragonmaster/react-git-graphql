import { render } from "@testing-library/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Wrapper = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={children}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const customRender = (ui, options) => {
  return {
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
};

export * from "@testing-library/react";

export { customRender as render };
