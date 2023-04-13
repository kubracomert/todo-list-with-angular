import { Component } from '@angular/core';
import { ToDoItem, ToDoListItemsModel } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new ToDoListItemsModel()
  showAll=false

  getName(){
    return this.model.user
  }

  getMissionsList(){
    if (this.showAll) {
      return this.model.items
    }
    return this.model.items.filter(item=>!item.state)
  }

  destroyMission(selectedItem:ToDoItem){//this function continue 
    console.log(this.model.items.filter(item=>item.mission!==selectedItem.mission))
    return this.model.items.filter(item=>item.mission!==selectedItem.mission)
  }

  addMission(mission:string){
    if (mission
      ) {
        return this.model.items.push({mission:mission,state:false})
      }
    else  return 

  }

}
