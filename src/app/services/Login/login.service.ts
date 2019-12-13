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
  createAccount(userDetails) {
    let body = JSON.stringify(userDetails);
    return this.http.post("/server/createAccount", body, httpOptions);
  }
  setUser(user: boolean, data) {
    this.user = user;
    console.log(data);
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userData", data);
  }
  getUser() {
    return JSON.parse(localStorage.getItem("loggedIn") || this.user.toString());
  }
  setAdmin(admin) {
    this.admin = admin;
  }
  getAdmin() {
    return this.admin;
  }
}
