import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {Dropdown, MenuItem} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class InsertData extends Component {


  render() {
    CodeMirror(document.body, {
      value: 'function myScript(){return 100;}\n',
      mode: 'javascript'
    });

    return (
      <section>
        Insert your data
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
            <FormControl componentClass="textarea" placeholder="textarea" rows="15"/>
            <div id="insertDate" placeholder="Code mirror" ></div>
          </FormGroup>
        </form>



        <Button className="btn-block">This needs to event option</Button>
      </section>
    )
  }
}

export default InsertData;