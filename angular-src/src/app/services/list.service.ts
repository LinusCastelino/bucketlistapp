import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { List } from '../models/List'

import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

    constructor(private http: Http) { }

    private serverApi= 'http://localhost:3000';


    public getAllLists():any{
      let URI = `${this.serverApi}/api/myBucketList`;
      return this.http.get(URI, {withCredentials : true})
              .map(res => res.json())
    }


    public getAllOthersLists():any {

      let URI = `${this.serverApi}/api/othersBucketList`;
      return this.http.get(URI, {withCredentials : true})
              .map(res => res.json())
              // .map(res => <List[]> res.list);

      // let URI = `${this.serverApi}/bucketlist/`;
      //   return this.http.get(URI)

      // return this.http.get('./assets/data/data.json')
      //   .map(res => res.json())
      //   .map(res =>
      //     <List[]>res.list
      //   );
    }

    public deleteList(listId : string) {
      console.log("inside delete function "+listId);
      let URI = `${this.serverApi}/api/deleteTask/${listId}`;
      let headers = new Headers;
      headers.append('Content-Type', 'application/json');
      return this.http.delete(URI, {headers: headers})
        .map(res => res.json());
    }

    	public addList(list: List) {
  		let URI = `${this.serverApi}/api/addTask/`;
  		let headers = new Headers;
       let body = JSON.stringify({title: list.title, description: list.description, priority: list.priority});
       console.log(body);
  		headers.append('Content-Type', 'application/json');
  		return this.http.post(URI, body ,{headers: headers, withCredentials: true})
  		.map(res => res.json());
    }
    
    public claimTask(list : List) : Observable<any>{
      let URL = `${this.serverApi}/api/claimTask`;
      let headers = new Headers;
      headers.append('Content-Type', 'application/json');
      let body = JSON.stringify({id: list.id, oldOwner: list.owner});
      return this.http.post(URL,body, {headers : headers})
              .map(res => res.json());
    }
}
