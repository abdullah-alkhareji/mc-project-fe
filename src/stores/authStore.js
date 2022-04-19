import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("token", token);
  };

  logout = () => {
    localStorage.removeItem("token");
    this.user = null;
  };

  register = async (userData, navigate) => {
    try {
      await instance.post("/api/users/", userData);
      await this.login(userData, navigate);
    } catch (error) {
      console.log({ error });
    }
  };

  login = async (userData, navigate) => {
    try {
      const res = await instance.post("/api/jwt/create/", userData);
      this.setUser(res.data.access);
      const res2 = await instance.get("/api/users/me/");
      this.user = res2.data;
      navigate("/");
    } catch (error) {
      console.log({ error });
    }
  };

  checkForToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        this.setUser(token);
        const res2 = await instance.get("/api/users/me/");
        this.user = res2.data;
      } catch (error) {
        this.unSetUser();
      }
    } else this.unSetUser();
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
