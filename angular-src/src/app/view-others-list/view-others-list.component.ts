import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/List'


@Component({
  selector: 'app-view-others-list',
  templateUrl: './view-others-list.component.html',
  styleUrls: ['./view-others-list.component.css']
})
export class ViewOthersListComponent implements OnInit {
  private lists: List[] = [];
  constructor(private listServ: ListService) { }

  ngOnInit() {
  //Load all list on init 
  this.loadLists();
}

public loadLists() {

//Get all lists from server and update the lists property
this.listServ.getAllLists().subscribe(
  response => this.lists = response,)
  
}

//The deleted list is being filtered out using the .filter method
public deleteList(list: List) {
  this.listServ.deleteList(list._id).subscribe(
  response =>	this.lists = this.lists.filter(lists => lists !== list),)
  
}

//onAddList will be invoked when the child component emits an event
public onAddList(newList) {
  this.lists = this.lists.concat(newList);
}
}

