import "./App.scss";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Homepage from "./pages/Homepage/Homepage";

const client = new ApolloClient({
  uri: "https://api.blocktap.io/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <Homepage />
      </ApolloProvider>
    </div>
  );
}

export default App;
