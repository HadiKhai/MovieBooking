import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}
  private user = JSON.parse(localStorage.getItem("loggedIn") || "false");
  private userData = localStorage.getItem("userData") || null;
  admin;
  signIn(userName, password) {
    return this.http.get(
      "/server/signIn/usernames/" + userName + "/passwords/" + password
    );
  }
  signInAdmin(userName, password) {
    return this.http.get(
      "/server/signIn/adminUsernames/" +
        userName +
        "/adminPasswords/" +
        password
    );
  }
  createAccount(userDetails) {
    let body = JSON.stringify(userDetails);
    return this.http.post("/server/createAccount", body, httpOptions);
  }
  setUser(user: boolean, data) {
    this.user = user;
    console.log(data);
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("isAdmin", "false");
    localStorage.setItem("userData", JSON.stringify(data));
  }
  setAdmin(user: boolean, data) {
    this.user = user;
    console.log(data);
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("isAdmin", "true");
    localStorage.setItem("userData", JSON.stringify(data));
  }
  getUser() {
    return JSON.parse(localStorage.getItem("userData"));
  }
  isLoggedIn() {
    return JSON.parse(localStorage.getItem("loggedIn"));
  }
  isAdmin() {
    return JSON.parse(localStorage.getItem("isAdmin"));
  }
  getAdmin() {
    return JSON.parse(localStorage.getItem("userData"));
  }
  logoutUser() {
    localStorage.setItem("loggedIn", "false");
    localStorage.setItem("userData", null);
    localStorage.setItem("isAdmin", "false");
  }
}
