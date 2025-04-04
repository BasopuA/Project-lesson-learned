// src/features/auth/AuthProvider.tsx
import { ReactNode, createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";

interface AuthContextType {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  login: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();

  const login = async (email: string, password: string) => {
    if (email === "anelebasopu@gmail.com" && password === "password@123") {
      const mockUser = {
        id: "1",
        name: "Anele Basopu",
        email: "anelebasopu@gmail.com",
        role: "admin",
      };

      dispatch(
        setCredentials({
          user: mockUser,
          token: "mock-token-123",
        })
      );
      localStorage.setItem("token", "mock-token-123");
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    dispatch(setCredentials({ user: null, token: null }));
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
