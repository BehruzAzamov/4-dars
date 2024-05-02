import { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};