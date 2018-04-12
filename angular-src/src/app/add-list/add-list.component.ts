import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';
import { AppStateService } from '../services/app.state.service';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  private newList :List;
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  constructor(private listServ: ListService, private appStateService: AppStateService) { }
 
  ngOnInit() {
  	this.newList = {
  		title: '',
  		priority:'Low',
  		description:'',
		  id:'',
		  owner:''

  	}
  }

  public addTask() {
  	this.listServ.addList(this.newList).subscribe(
  		response=> {  			
  			if(response.message === 'Task Created Successfully'){
				 console.log("task added successfully ");
				 this.appStateService.refreshUserList(); 
				 //this.addList.emit(this.newList);
				 this.newList = {
					title: '',
					priority:'Low',
					description:'',
					id:'',
					owner:''
		  
				}
			  }			  			  
  		}
	);

	}

}