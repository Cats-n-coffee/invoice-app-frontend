import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticated";
import { useAuth } from './contexts/authProvider';

// Needs to use auth context 
export default function App() {
  const { user } = useAuth();

  return (
      user ? <Authenticated /> : <Unauthenticated /> 
  );
}
