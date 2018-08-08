import React from "react"
import dateFns from "date-fns"
import 'whatwg-fetch'
import cookie from 'react-cookies'
//import Form from './Form'
import differenceInDays from 'date-fns/difference_in_days'
class Tasks extends React.Component{

  constructor(props){
      super(props)
      this.createTasks = this.createTasks.bind(this)
      this.loadTasks = this.loadTasks.bind(this)   
        this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    

  }	
  handleSubmit(event){
     event.preventDefault()
     console.log(this.state)
     let data =this.props.data
     console.log(data)
     this.createTasks(data);
     event.target.value = ""
  }
  handleInputChange(event){        
   event.preventDefault()
         //console.log(event.target.name,event.target.value)
         this.setState({
           [event.target.name]:event.target.value
         })
  }
  loadTasks(){
      fetch('/date/api/calendar')
     .then(response => response.json())
     .then(data => this.setState({tasks:data}))
  }
  createTasks(data){
  
  let thisComp = this
  const csrfToken = cookie.load('csrftoken') 
  
  fetch('/date/api/calendar', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRFToken':csrfToken,
    async:'false',
  },
  body: JSON.stringify({
    message: this.state.task,
    date_for: data.selectedDate,
  }),
  credentials: 'include',
})
 
  fetch('/date/api/calendar')
     .then(response => response.json())
     .then(data => this.setState({tasks:data}))
  // this.loadTasks()
  // this.render()
  }
  
	componentDidMount(){
     this.setState({
        tasks:[]
     })
     this.loadTasks()
     
  }

  render(){
   var tasks = []
   if(this.state===null){
     tasks = this.props.data.tasks
   }
   else tasks = this.state.tasks
   
   const date = this.props.data.selectedDate
   let dateFormat  = 'DD-MM-YYYY'
   let formattedDate = dateFns.format(date,dateFormat)
    
    const csrftoken = cookie.load('csrftoken')   
   return (
   <div className = "task_list">
    <div className = "date_selected">
        <h5>Date : {formattedDate}</h5>
    </div>
    {(csrftoken!==undefined && csrftoken!==null)?
    <div className = "tasks">
      <form onSubmit = {this.handleSubmit}>
           <div className = "form-group">
              <input type="text" id="task" name="task" className = "form-control" placeholder="Enter task" onChange = {this.handleInputChange} required="required"/>
           </div>
           <input type="submit" value="Add" className = "add_button " />
         </form>
    </div> 
    :""}
   
   {(tasks.length > 0)? tasks.map((taskItem,index)=>{
                const time = taskItem.date_for
                let dateFormat = 'H:m A'
                let formattedTime =dateFns.format(time,dateFormat)
                return (  (differenceInDays(date,taskItem.date_for)==0)?<div class="task_container"><span className="message_span"><b>{taskItem.message}</b></span><span className = "date_span">{formattedTime}</span></div>:''   ) 
   

   }):<p>No posts found</p>}
    
   </div>
   );
  }
}
export default Tasks;




