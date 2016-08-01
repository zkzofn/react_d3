import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {Dropdown, MenuItem} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class InsertData extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      term: '',
      termCSV: []
    }
    
  }

  render() {
    return (
      <section>
        <div>
          Insert your data
        </div>
        <Dropdown id="dropdown-choose-sample" className="borderless">
          <Dropdown.Toggle>
            <span>
              or choose one of our samples
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <MenuItem>Car(multivariate)</MenuItem>
            <MenuItem>Movies(dispersions)</MenuItem>
            <MenuItem>Music(flows)</MenuItem>
            <MenuItem>Cocktials(correlations)</MenuItem>
          </Dropdown.Menu>
        </Dropdown>

        <form>
          <FormGroup>
            <FormControl componentClass="textarea" 
                         placeholder="textarea" 
                         rows="15"
                         value={this.props.term}
                         onChange={event => this.onInputChange(event.target.value)}
            />
          </FormGroup>
        </form>



        <Button className="btn-block">This needs to event option</Button>
      </section>
    )
  }



  onInputChange(term) {
    this.setState({term});

    this.setTermToCSV(term);
  }

  setTermToCSV(term) {
    const termArray = term.split(/\r?\n|\r/);
    const termCSV = termArray.map((termLine) => {
      return termLine.split(',');
    });

    this.setState({termCSV});
    console.log(termCSV);
  }
}

export default InsertData;