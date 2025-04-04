import { create } from "zustand";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface LoginResponse {
  data: {
    status: number;
    token: string;
    user: User;
  };
  message: string;
  success: boolean;
  error: string | null;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  message: string | null;
  error: string | null;
  login: (response: LoginResponse) => void;
  logout: () => void;
}

const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  token: null,
  message: null,
  error: null,

  login: (response: LoginResponse) => {
    const { data, message } = response;
    set({
      user: data.user,
      isAuthenticated: true,
      token: data.token,
    });
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
      token: null,
      message: null,
    });
  },
}));

export default useAuth;
