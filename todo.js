//Array to hold todo
var editingflag = -1
var count = 0 
var filter = "Incomplete"
 var todoArray =
 [
    {
        id:count++,
        text:"Todo1",
        completed: false
    },
    {
       id:count++, 
        text:"Todo2",
        completed: false
    },
    {
        id:count++,
        text:"Todo3",
        completed: true
    },
    {
        id:count++,
        text:"Todo4",
        completed: false
    },
    {
       id:count++, 
        text:"Todo5",
        completed: false
    },
    {
        id:count++,
        text:"Todo6",
        completed: true
    }
     
]
const deleteTodo = (id)=>
{
    todoArray =  todoArray.filter(todoTemp =>
    {
        if (id === todoTemp.id)
        {
            return false
        }
        else
        {
            return true
        }
    })
    updateFrontend()
}
    const updateFrontend = ()=>
{
    var todoList = document.getElementById("todoList")
    todoList.innerHTML =""
    todoArray.map(todoTemp =>
    {
        switch(filter)
       {
                case "Incomplete":
                if(! todoTemp.completed)
           {
                console.log(todoTemp.text)
                console.log(todoTemp.completed)
                let checkboxInput=""
                let textTodo =todoTemp.text
                if(todoTemp.completed)
               {
                 checkboxInput="  <input type='checkbox'checked onchange='onCheckedchange("+todoTemp.id+")'/> "
                 textTodo="<s>"+textTodo+"</s>"
                }
                else
                {
                 checkboxInput=" <input type='checkbox' onchange='onCheckedchange("+todoTemp.id+")'/>"
                }
                 if (editingflag ===todoTemp.id)
               {
                 todoList.innerHTML = todoList.innerHTML +
                 "<li>"+
                 checkboxInput+
                 "<input id ='todoEdit' type='text' value="+(todoTemp.text)+"></input>"+
                 (todoTemp.completed ? 
                 "":
                 "<button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
                 "<button onclick=saveEditidTodo("+todoTemp.id+ ")>save</button>")
                    
                  + "</li>"
                }
                 else
               {
                 todoList.innerHTML = todoList.innerHTML +
                 "<li>"+
                 checkboxInput +
                 textTodo +
                 (todoTemp.completed ?
                 "":
                 "<button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
                 "<button onclick=editTodo("+todoTemp.id+")>Edit</button>")
            
                 +"</li>"

                }
            }
                  break;
                  case "complete":
                  if(todoTemp.completed)
           {
                    console.log(todoTemp.text)
                    console.log(todoTemp.completed)
                    let checkboxInput=""
                    let textTodo =todoTemp.text
                    if(todoTemp.completed)
               {
                  checkboxInput="  <input type='checkbox'checked onchange='onCheckedchange("+todoTemp.id+")'/> "
                  textTodo="<s>"+textTodo+"</s>"
                }
                 else
                 {
                 checkboxInput=" <input type='checkbox' onchange='onCheckedchange("+todoTemp.id+")'/>"
                 }
                 if (editingflag ===todoTemp.id)
                {
                 todoList.innerHTML = todoList.innerHTML +
                 "<li>"+
                 checkboxInput+
                 "<input id ='todoEdit' type='text' value="+(todoTemp.text)+"></input>"+
                 (todoTemp.completed ? 
                  "":
                  "<button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
                  "<button onclick=saveEditidTodo("+todoTemp.id+ ")>save</button>")
                    
                 + "</li>"
                 }
                else
                {
                 todoList.innerHTML = todoList.innerHTML +
                 "<li>"+
                 checkboxInput +
                 textTodo +
                 (todoTemp.completed ?
                 "":
                 "<button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
                 "<button onclick=editTodo("+todoTemp.id+")>Edit</button>")
            
                 +"</li>"

                 }
            }
             break;
             case "All":
             console.log(todoTemp.text)
             console.log(todoTemp.completed)
             let checkboxInput=""
             let textTodo =todoTemp.text
             if(todoTemp.completed)
           {
             checkboxInput="  <input type='checkbox'checked onchange='onCheckedchange("+todoTemp.id+")'/> "
             textTodo="<s>"+textTodo+"</s>"
            }
             else
           {  
             checkboxInput=" <input type='checkbox' onchange='onCheckedchange("+todoTemp.id+")'/>"
           }
             if (editingflag ===todoTemp.id)
           {
             todoList.innerHTML = todoList.innerHTML +
             "<li>"+
             checkboxInput+
             "<input id ='todoEdit' type='text' value="+(todoTemp.text)+"></input>"+
             (todoTemp.completed ? 
             "":
             "<button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
             "<button onclick=saveEditidTodo("+todoTemp.id+ ")>save</button>")
                 
             + "</li>"
            }
             else
           {
             todoList.innerHTML = todoList.innerHTML +
             "<li>"+
             checkboxInput +
             textTodo +
             (todoTemp.completed ?
             "":
             "<button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
             "<button onclick=editTodo("+todoTemp.id+")>Edit</button>")
           
             +"</li>"

            }
             break;
             default:

        }
     
       return todoTemp
    })     
}
const saveEditidTodo =(id)=>
    {
            console.log(id)
         todoArray = todoArray.map(todoTemp =>
          { 
             if(id === todoTemp.id)
              {
                 todoTemp.text=document.getElementById("todoEdit").value
                return todoTemp
              }
              else
              {
                   return todoTemp
              }
        
    })
    editingflag=-1
    updateFrontend()
     }
const editTodo=(id)=>
 {
    console.log(id)
    editingflag =id
    updateFrontend()
 }

const addTodo = ()=>
{
   let todoText = document.getElementById("todoInput").value
    if(todoText === "")
    {
        alert("Todo can't be blank ,please enter something fot todo !")
    }
    else
    {
        
        todoArray.push(
        {
            id :count++,
            text:todoText,
            completed :false
        })
        document.getElementById("todoInput").value =""
        updateFrontend()
        
    }
}
const onCheckedchange = (id) =>
{
    console.log("onCheckedchange:"+id)
    todoArray.map(todoTemp =>
    {
        if(id===todoTemp.id)
        {
            todoTemp.completed = !todoTemp.completed 
        }
        return todoTemp
       
    })
    updateFrontend()
}
const filterTodo = (filterAction) =>
{
    console.log("filterTodo",filterAction)
    filter = filterAction
    updateFrontend()
} 
