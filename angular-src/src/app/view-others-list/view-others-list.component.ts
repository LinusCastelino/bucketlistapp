import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/List'
import { AppStateService } from '../services/app.state.service'


@Component({
  selector: 'app-view-others-list',
  templateUrl: './view-others-list.component.html',
  // templateUrl: `<app-view-others-list></app-view-others-list>`,
  styleUrls: ['./view-others-list.component.css']
})
export class ViewOthersListComponent implements OnInit {
  private lists: List[] = [];

  constructor(private listServ: ListService, private appStateService : AppStateService) { }
 

  ngOnInit() {
  //Load all list on init 
  this.loadLists();
}

public loadLists() {
//Get all lists from server and update the lists property
this.listServ.getAllOthersLists().subscribe(
  response => 
    this.lists = response)
}

public claimList(list : List){
  this.listServ.claimTask(list)
  .subscribe(
    res => {
      if(res.message === 'Task Owner Updated Successfully'){
        this.loadLists();

        this.appStateService.refreshUserList();
      }
    }

  );
}

}

