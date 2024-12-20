import useStorageState from "./useStorageState";

const useAuth = () => {
  const [{ session, isLoading }, setSession] = useStorageState("session");

  const signIn = async () => {
    // 임시 토큰 xxx
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
