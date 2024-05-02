// hooks/useSignin.js
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const useSignin = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signin = async (email, password) => {
        setError(null);
        setIsPending(true);

        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsPending(false);
        }
    };

    return { error, isPending, signin };
};
