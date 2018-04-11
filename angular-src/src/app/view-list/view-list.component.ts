import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/List'
import { AppStateService } from '../services/app.state.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  //lists propoerty which is an array of List type
  private lists: List[] = [];
  initialLoadList: List[]= [];
  closeResult: string;
  private ownerList: any = [];

  constructor(private listServ: ListService, private appStateService : AppStateService, 
              private modalService: NgbModal) { }

  ngOnInit() {

    //Load all list on init
    this.loadLists();
    this.getOwners();
  }

  public loadLists() {
    //Get all lists from server and update the lists property
	  this.listServ.getAllLists().subscribe(
      response => {
        this.initialLoadList = response;
        this.appStateService.updateCurrentUserList(this.initialLoadList);
      })
    this.appStateService.currentUserList.subscribe(userList => this.lists = userList);
  }

  //The deleted list is being filtered out using the .filter method
  public deleteList(list: List) {
    this.listServ.deleteList(list.id).subscribe(
	  response =>	{
      if(response.message === 'Task Deleted Successfully'){
        this.lists = this.lists.filter(lists => lists !== list)
      }
    })

	}

  //onAddList will be invoked when the child component emits an event
  public onAddList(newList) {
    this.lists = this.lists.concat(newList);
  }

  public assign(content) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  private getOwners(){
    this.listServ.getAllOwners().subscribe(
      response => {
        console.log("Owner list "+JSON.stringify(response));
        this.ownerList = response;
      })

  }
  
}
