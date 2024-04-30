import {
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.js";

function useSignup() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return { signUpWithGoogle, user, error };
}

export { useSignup };