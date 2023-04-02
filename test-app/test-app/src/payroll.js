import React from 'react';
import NewPositionForm from './new-position-form';

 //This is to locate the map of the position by using the index
export default class Payroll extends React.Component {
    render() {
        const positions = this.props.data.positions
            ? this.props.data.positions.map((position, index) =>
                <li key={index}>
                    {position.name} Salary: {position.salary}
                    <button onClick={e =>
                    this.props.deletePosition(e, this.props.data, position)
                    }>Delete</button>
                </li>)
            : null;
            return (
                <div>
                    <h1>{this.props.data.name}</h1>
                    <ul>
                        {positions}
                    </ul>
                    <NewPositionForm
                        addNewPosition={this.props.addNewPosiition} data={this.props.data} />
                </div>
            );
     }
}