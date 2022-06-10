import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import GetCharacters from "./Components/GetCharacters";

import "./index.css";

const gURL = "https://narutoql.up.railway.app/graphql";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`graphql error ${message}`);
    });
  }
});
const link = from([errorLink, new HttpLink({ uri: gURL })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen w-full bg-purple-800 text-light font-sans">
        <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
          <div className="py-4">
            <h1 className="font-bold text-6xl text-orange mb-2">Naruto App</h1>
            <div className="text-white">
              Simple webapp that fetches data from the{" "}
              <a
                href="https://narutoql.com"
                className="font-bold text-pink-200"
              >
                NarutoQL
              </a>{" "}
              API using GraphQL
            </div>
          </div>
          <GetCharacters />
          <footer className="uppercase inline-flex items-center gap-2 w-full justify-center py-4 font-bold text-white">
            Made With ❤️,<i className="devicon-react-plain colored"></i>
            {" & "}
            <i className="devicon-graphql-plain colored"></i>
          </footer>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
