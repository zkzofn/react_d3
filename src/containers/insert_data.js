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

    this.setTermToCSV({term});
    console.log({term});    //term 에 {}를 씌우면 object 로 console 에 출력된다.
  }

  setTermToCSV(term) {
    // t
  }
}

export default InsertData;