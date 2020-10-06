import React from "react";

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleonChange = (e) => {
    
    this.setState({ input: e.target.value });
  };

  render() {
    const input = this.state.input;
    
    const employees = this.props.employees.filter(el => el.name.toLowerCase().match(input.toLowerCase()));

    return (
      <React.Fragment>
        <div className="controls">
          <input
            type="text"
            className="filter-input"
            data-testid="filter-input"
            value={input}
            
            onChange={this.handleonChange}
          />
        </div>
        <ul className="employees-list">
          {employees.map((employee) => (
            <li key={employee.name} data-testid="employee">
              {employee.name}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
