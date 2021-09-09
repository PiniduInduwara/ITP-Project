import React, { Component } from 'react';
import axios from 'axios';


export default class calcExpenses extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        
        this.onChangeD1 = this.onChangeD1.bind(this);
        this.onChangeE1 = this.onChangeE1.bind(this);
        this.onChangeD2 = this.onChangeD2.bind(this);
        this.onChangeE2 = this.onChangeE2.bind(this);
        this.onChangeD3 = this.onChangeD3.bind(this);
        this.onChangeE3 = this.onChangeE3.bind(this);
        this.onChangeD4 = this.onChangeD4.bind(this);
        this.onChangeE4 = this.onChangeE4.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id:'',
            d1:'',
            e1:'',
            d2:'',
            e2:'',
            d3:'',
            e3:'',
            d4:'',
            e4:'',
            total:'',
        }
    }

    onChangeID(e) {
        this.setState({
            _id: e.target.value
        });
    }

    onChangeD1(e) {
        this.setState({
            d1: e.target.value
        });
    }

    onChangeE1(e) {
        this.setState({
            e1: e.target.value
        });
    }

    onChangeD2(e) {
        this.setState({
            d2: e.target.value
        });
    }

    onChangeE2(e) {
        this.setState({
            e2: e.target.value
        });
    }

    onChangeD3(e) {
        this.setState({
            d3: e.target.value
        });
    }

    onChangeE3(e) {
        this.setState({
            e3: e.target.value
        });
    }

    onChangeD4(e) {
        this.setState({
            d4: e.target.value
        });
    }

    onChangeE4(e) {
        this.setState({
            e4: e.target.value
        });
    }

    onChangeTotal(e) {
        this.setState({
            total: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const calcExp = {
            _id: this.state._id,
            d1: this.state.d1,
            e1: this.state.e1,
            d2: this.state.d2,
            e2: this.state.e2,
            d3: this.state.d3,
            e3: this.state.e3,
            d4: this.state.d4,
            e4: this.state.e4,
            total: this.state.total,
            
        }

        console.log(calcExp);

        axios.post('http://localhost:5000/calcExp/add', calcExp)
            .then(res => console.log(res.data));

        window.location = '/';
    }


    render() {
        return (
            <div className='container'>
                <form className="row gy-2 gx-3 align-items-center" onSubmit={this.onSubmit}>
                    <div className="col-auto" >
                        <label class="visually-hidden" for="autoSizingInput">Expenses ID: </label>
                        <select class="form-select" id="autoSizingSelect">
                              <option selected>Select Department</option> 
                               <option value="1">One</option>
                               <option value="2">Two</option>
                               <option value="3">Three</option>
                        </select>
                        
                    </div>
                  
                    <div className="col-auto">
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Expenses"
                            required
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>
                    
                

                <br/> <br/>   

               
                    <div className="col-auto" >
                        <label class="visually-hidden" for="autoSizingInput">Expenses ID: </label>
                        <select class="form-select" id="autoSizingSelect">
                              <option selected>Select Department</option>
                               <option value="1">One</option>
                               <option value="2">Two</option>
                               <option value="3">Three</option>
                        </select>
                        
                    </div>
                    <div className="col-auto">
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Expenses"
                            required
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>
                    

                   

                <br/> <br/> 
                 
              
                    <div className="col-auto" >
                        <label class="visually-hidden" for="autoSizingInput">Expenses ID: </label>
                        <select class="form-select" id="autoSizingSelect">
                              <option selected>Select Department</option>
                               <option value="1">One</option>
                               <option value="2">Two</option>
                               <option value="3">Three</option>
                        </select>
                        
                    </div>
                    <div className="col-auto">
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Expenses"
                            required
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>
                   
                    

               <br/> <br/> 

               
                    <div className="col-auto" >
                        <label class="visually-hidden" for="autoSizingInput">Expenses ID: </label>
                        <select class="form-select" id="autoSizingSelect">
                              <option selected>Select Department</option>
                               <option value="1">One</option>
                               <option value="2">Two</option>
                               <option value="3">Three</option>
                        </select>
                        
                    </div>
                    <div className="col-auto">
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Expenses"
                            required
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>
                    
                    <div >
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}