import axiosInstance from "./api";

export const handlelogin = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/login", { email, password });
    return {
      success: true,
      message: "Login successful",
      data: response.data,
    };
  } catch (error) {
    console.error("error during login", error);
    return {
      success: false,
      message: "Login failed",
      data: null,
    };
  }
};
