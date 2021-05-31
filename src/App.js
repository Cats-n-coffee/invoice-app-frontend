import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticated";
import { useAuth } from './contexts/AuthProvider';

// Needs to use auth context 
export default function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <h1>hello frontend</h1>
      { user ? <Authenticated /> : <Unauthenticated /> }
    </div>
  );
}
