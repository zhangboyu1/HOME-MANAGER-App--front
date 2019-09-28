import React from 'react';

class Clock extends React.Component{
    constructor(){
        super()

        this.state = { time: new Date() }
   
    }
        componentDidMount() {

            this.upDateTime();
        }

        upDateTime() {
                setInterval(() => {
                this.setState({ time: new Date() });
                }, 1000);
            
            }



        render(){
            return(
           <div>

            <h2>It is {}</h2>

           </div>
            )
        }
    }



export default Clock;