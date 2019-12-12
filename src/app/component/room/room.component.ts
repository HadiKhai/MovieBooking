import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { RoomService } from "src/app/services/Room/room.service";
import { SeatService } from "src/app/services/Seats/seat.service";
import { ifStmt } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"]
})
export class RoomComponent implements OnInit {
  public rooms;
  isShow = true;
  roomForm: FormGroup;
  id;
  validMessage: string = "";
  mySubscription: any;
  disable = true;
  roomArray: any[];
  roomBooleanArrays = [];
  constructor(
    private roomservice: RoomService,
    private seatService: SeatService,
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
    this.route.data.subscribe(
      (data: { rooms: any }) => (this.rooms = data.rooms)
    );
    this.id = this.route.snapshot.params.id;
    this.roomArray = Array.of(this.rooms);
    this.roomArray = this.roomArray[0];
    const size = this.roomArray.length;
    for (let i = 0; i < size; i++) {
      this.roomBooleanArrays.push(false);
    }
    console.log(this.roomBooleanArrays);
    this.roomForm = new FormGroup({
      roomCapacity: new FormControl("", Validators.required),
      roomStatus: new FormControl("true", Validators.required),
      roomType: new FormControl("", Validators.required)
    });
  }
  toggleComponent(id) {
    let index;
    for (let i = 0; i < this.roomArray.length; i++) {
      if (id === this.roomArray[i].roomId) {
        index = i;
      }
    }
    this.roomBooleanArrays[index] = true;
  }
  toggleC(id) {
    let index;
    for (let i = 0; i < this.roomArray.length; i++) {
      if (id === this.roomArray[i].roomId) {
        index = i;
      }
    }
    return this.roomBooleanArrays[index];
  }
  submitRegistration() {
    if (this.roomForm.valid) {
      this.validMessage = "Your room has been added!";
      this.roomservice.createRoom(this.roomForm.value, this.id).subscribe(
        data => {
          this.roomForm.reset();
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
    this.router.navigateByUrl("/admin/cinemas/" + this.id + "/rooms");
  }

  deleteRoom(id: number) {
    this.roomservice.deleteRoom(id, this.id).subscribe(data => {
      console.log("success");
    });
    this.router.navigateByUrl("/admin/cinemas/" + this.id + "/rooms");
  }
  getrooms(id) {
    this.roomservice.getRoom(id).subscribe(
      data => {
        this.rooms = data;
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

  generateSeats(cinemaId, roomId, roomCapacity, roomStatus) {
    if (roomStatus) {
      this.seatService.generateSeats(cinemaId, roomId, roomCapacity).subscribe(
        () => {
          return true;
        },
        error => console.log(error),
        () => console.log("data loaded")
      );
      this.router.navigateByUrl("/admin/cinemas/" + this.id + "/rooms");
    }
    this.router.navigateByUrl("/admin/cinemas/" + this.id + "/rooms");
  }
  deleteSeats(cinemaId, roomId, roomCapacity, roomStatus) {
    if (!roomStatus) {
      this.seatService
        .deleteSeats(cinemaId, roomId, roomCapacity)
        .subscribe(data => {
          console.log("success");
        });
      this.router.navigateByUrl("/admin/cinemas/" + this.id + "/rooms");
    }
  }
}
