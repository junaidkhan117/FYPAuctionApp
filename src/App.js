import "./App.css";
import Router from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
