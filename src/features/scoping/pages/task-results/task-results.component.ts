import { Component, OnInit } from "@angular/core";
import { ScopingSession } from "../../../../models/scoping-session";
import { Observable } from "rxjs/Observable";
import { User } from "../../../../models/user";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../../store/app.reducer";
import { AuthQuery } from "../../../authentication/store/auth.reducer";
import { ScopingFacade } from "../../store/scoping.facade";

@Component({
  selector: "app-task-results",
  templateUrl: "./task-results.component.html"
})
export class TaskResultsComponent implements OnInit {
  session: ScopingSession;
  hasResults = false;
  user$: Observable<User>;
  user: User;
  isModerator = true;
  finalEstimate: number;

  constructor(
    private store: Store<AppState>,
    private scopingFacade: ScopingFacade
  ) {
    this.user$ = this.store.pipe(select(AuthQuery.selectUser));
    this.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {}
}
