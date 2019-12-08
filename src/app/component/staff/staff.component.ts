import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { StaffService } from "src/app/services/Staff/staff.service";

@Component({
  selector: "app-staff",
  templateUrl: "./staff.component.html",
  styleUrls: ["./staff.component.css"]
})
export class StaffComponent implements OnInit {
  public staffs;
  isShow = true;
  staffForm: FormGroup;
  id;
  validMessage: string = "";
  mySubscription: any;
  constructor(
    private staffservice: StaffService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.mySubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getstaffs(this.id);
    console.dir(this.staffs);
    this.staffForm = new FormGroup({
      staffFirstName: new FormControl("", Validators.required),
      staffLastName: new FormControl("", Validators.required),
      staffAddress: new FormControl("", Validators.required),
      staffPhone: new FormControl("", Validators.required),
      staffRole: new FormControl("", Validators.required)
    });
  }

  submitRegistration() {
    if (this.staffForm.valid) {
      this.validMessage = "Your staff has been added!";
      this.staffservice.createStaff(this.staffForm.value, this.id).subscribe(
        data => {
          this.staffForm.reset();
          return true;
        },

        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage =
        "Please Fill the missing information in the form before submitting";
    }
    this.router.navigateByUrl("/admin/cinemas/" + this.id + "/staffs");
  }

  deleteStaff(id: number) {
    this.staffservice.deleteStaff(id, this.id).subscribe(data => {
      console.log("success");
    });
    this.router.navigateByUrl("/admin/cinemas/" + this.id + "/staffs");
  }
  getstaffs(id) {
    this.staffservice.getStaff(id).subscribe(
      data => {
        this.staffs = data;
      },
      error => console.log(error),
      () => console.log("data loaded")
    );
  }
  closeResult: string;

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
