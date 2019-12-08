import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class StaffService {
  constructor(private http: HttpClient) {}

  getStaff(id: number) {
    return this.http.get("server/admin/cinemas/" + id + "/staffs");
  }
  createStaff(staff, id) {
    let body = JSON.stringify(staff);
    return this.http.post(
      "/server/admin/cinemas/" + id + "/staffs",
      body,
      httpOptions
    );
  }
  deleteStaff(staffId: number, cinemaId) {
    return this.http.delete(
      "/server/admin/cinemas/" + cinemaId + "/staffs/" + staffId
    );
  }
}
