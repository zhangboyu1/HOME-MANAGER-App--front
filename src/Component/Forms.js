import React from 'react';



class Forms extends React.Component{
    
    constructor(){
        super()
        this.state={
            
            userName:``,
            email:``,
            city:``
        }
        this.changeInput=this.changeInput.bind(this);
        
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    changeInput(e){
        this.setState({
            [e.target.id]:e.target.value
        })
    }



handleSubmit(e) {

    e.preventDefault();
    console.log('Sumitted:');
    console.log(this.state.value);

    }

    render(){
  
      return(


      
        <form style={{ width: 300, margin: 20 }} onSubmit={this.handleSubmit}>

            <div >
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" value={this.state.userName} onChange={this.changeInput} />
            </div>

            <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" value={this.state.email} onChange={this.changeInput} />
            </div>

            <div >
                <label htmlFor="city">City</label>
                <select className="form-control" id="city" value={this.state.city} onChange={this.changeInput}>
                <option value="Sydney">Sydney</option>
                <option value="Melbourne">Melbourne</option>
                <option value="Brisbane">Brisbane</option>
                </select>
            </div>

            <div>

            <button type="submit"  >Sign up</button>
            
            </div>
        </form>

      );
    }
  }
  
  
  export default Forms
  