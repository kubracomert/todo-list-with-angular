export class ToDoListItemsModel{
    user:string;
    items;
    
    constructor(){
        this.user="Strawberry"
        this.items =[
            new ToDoItem("Breakfeast",true),
            new ToDoItem("Work",false),
            new ToDoItem("Sleep",false)
        ];
    }
}

export class ToDoItem {
    mission:string;
    state:boolean;

    constructor(mission:string,state:boolean){
        this.mission=mission
        this.state=state
    }
}