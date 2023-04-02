import React from 'react';

export default class NewPositionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            salaryValue: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        this.setState({nameValue: e.target.value});
    }

    handleSalaryChange(e) {
        this.setState({salarValue: e.target.value});
    }

    handleClick(e) {
        this.props.addNewPosition(e, this.props.data,
            {name: this.state.nameValue, salary: this.state.salaryValue});
        this.setState({nameValue: '', salaryValue: ''});
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.nameValue} />
                <input type="text" placeholder="Salary" onChange={this.handleSalaryChange} value={this.state.salaryValue} />
                <button onClick={this.handleClick}>Add Position</button>
            </div>
        );
    }

}
