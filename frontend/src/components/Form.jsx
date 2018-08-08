import React,{Component} from 'react'

class Form extends Component{
	constructor(props){
	  super(props)
	  this.handleSubmit = this.handleSubmit.bind(this)
	  this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleSubmit(event){
	   event.preventDefault()
	   console.log(this.state)
	   let data =this.state
	   console.log(data)
    
	}
	handleInputChange(event){         event.preventDefault()
         //console.log(event.target.name,event.target.value)
         this.setState({
           [event.target.name]:event.target.value
         })
	}
	render(){
	return (
         <form onSubmit = {this.handleSubmit}>
           <div className = "form-group">
              <input type="text" id="task" name="task" className = "form-control" placeholder="Enter task" onChange = {this.handleInputChange} required="required"/>
           </div>
           <button onClick = {this.createTasks}className = "btn btn-primary ">Add</button>
         </form>
	)
	}
}
export default Form;
