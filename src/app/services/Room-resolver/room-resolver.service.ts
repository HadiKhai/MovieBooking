import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { RoomService } from "../Room/room.service";

@Injectable({
  providedIn: "root"
})
export class RoomResolverService implements Resolve<any> {
  public room;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.params.id;
    return this.roomService.getRoom(id);
  }

  constructor(private roomService: RoomService) {}
}
