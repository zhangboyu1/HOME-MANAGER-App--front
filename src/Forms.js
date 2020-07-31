import React from 'react';


class Forms extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            userName: [],
            passWord: [],
            City: []
        }

        this.changeInput = this.changeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeInput(e) {
        //    console.log(e.target); // print the specific DOM Element;
        //    console.log(e.target.id); // It can print the specific ID bond to that specific Element;
        //    console.log(e.target.value); //虽然每一次，输入都会有value consolelog 但是无法显示。

        //先读值


        // console.log(this.state)
        const { id } = e.target
        // console.log (id)

        if (id === `passWord`) {
            this.setState({

                [id]: [parseInt(e.target.value)]
            })

        } else {
            this.setState({

                [id]: [e.target.value]
            })

        }
    }


    handleSubmit(e) {

        e.preventDefault();
        console.log('Sumitted:');
        console.log(this.state)
        console.log(`The userName is ${this.state.userName}, the passWord is ${this.state.passWord}`)


        setTimeout(() => {

            return (this.setState({

                //不知道在Ajax里如何清空数组。。。

            }))

        }, 0);
    }

    render() {

        return (

            <>
                <h1>The userName is {this.state.userName}, the passWord is {this.state.passWord} </h1>
                <form style={{ width: 300, margin: 20 }} onSubmit={this.handleSubmit}>

                    <div >
                        <label htmlFor="userName">Username</label>
                        <input type="text" placeholder="userName" id="userName" value={this.state.userName} onChange={this.changeInput} />
                    </div>

                    <div >
                        <label htmlFor="password">password</label>
                        <input type="passWord" placeholder="passWord" id="passWord" value={this.state.passWord} onChange={this.changeInput} />
                    </div>

                    <div>
                        <button type="submit"  >signUp</button>
                    </div>

                </form>
            </>

        )
    }
}


export default Forms
