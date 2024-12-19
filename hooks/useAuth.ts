import useStorageState from "./useStorageState";

const useAuth = () => {
  const [{ session, isLoading }, setSession] = useStorageState("session");

  const signIn = async () => {
    await setSession("xxx");
  };

  const signOut = async () => {
    await setSession(null);
  };

  return {
    session,
    isLoading,
    signIn,
    signOut,
  };
};

export default useAuth;
