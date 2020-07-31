import React from 'react';

export default class Li extends React.Component {

    constructor(props) {
        super(props)


    }
    render() {
        const { humidity, windSpeed } = this.props.element
        console.log(this.props.element)
        return (

            <>
                <li>
                    <h1>humidity</h1>
                    <p>{humidity}</p>

                </li>

                <li>
                    <h1>wind</h1>
                    <p>{windSpeed}k/m</p>
                </li>
            </>

        );
    }

}

