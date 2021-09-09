import React, { Component } from 'react';
import axios from 'axios';


export default class calcIncome extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);

        this.onChangeDep1 = this.onChangeDep1.bind(this);
        this.onChangeI1 = this.onChangeI1.bind(this);
        this.onChangeDep2 = this.onChangeDep2.bind(this);
        this.onChangeI2 = this.onChangeI2.bind(this);
        this.onChangeDep3 = this.onChangeDep3.bind(this);
        this.onChangeI3 = this.onChangeI3.bind(this);
        this.onChangeDep4 = this.onChangeDep4.bind(this);
        this.onChangeI4 = this.onChangeI4.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);

        this.state = {
            _id:'',
            dep1:'',
            i1:'',
            dep2:'',
            i2:'',
            dep3:'',
            i3:'',
            dep4:'',
            i4:'',
            total:'',
        }
    }

    onChangeID(e) {
        this.setState({
            _id: e.target.value
        });
    }

    onChangeDep1(e) {
        this.setState({
            dep1: e.target.value
        });
    }

    onChangeI1(e) {
        this.setState({
            i1: e.target.value
        });
    }

    onChangeDep2(e) {
        this.setState({
            dep2: e.target.value
        });
    }

    onChangeI2(e) {
        this.setState({
            i2: e.target.value
        });
    }

    onChangeDep3(e) {
        this.setState({
            dep3: e.target.value
        });
    }

    onChangeI3(e) {
        this.setState({
            i3: e.target.value
        });
    }

    onChangeDep4(e) {
        this.setState({
            dep4: e.target.value
        });
    }

    onChangeI4(e) {
        this.setState({
            i4: e.target.value
        });
    }

    onChangeTotal(e) {
        this.setState({
            total: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const calcInc = {
            _id: this.state._id,
            dep1: this.state.dep1,
            i1: this.state.i2,
            dep2: this.state.dep2,
            i2: this.state.i2,
            dep3: this.state.dep3,
            i3: this.state.i3,
            dep4: this.state.dep4,
            i4: this.state.i4,
            total: this.state.total,
            
        }


        console.log(calcInc);

        axios.post('http://localhost:5000/calcInc/add', calcInc)
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
                            placeholder="Enter Total Income"
                            required
                            className="form-control"
                            value={this.state.department}
                            onChange={this.onChangeDepartment}
                        />
                    </div>
                    

                    <div className="col-auto">
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>

                <br/> <br/> 

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
                            placeholder="Enter Total Income"
                            required
                            className="form-control"
                            value={this.state.department}
                            onChange={this.onChangeDepartment}
                        />
                    </div>
                    

                    <div className="col-auto">
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>

                <br/> <br/> 
                 
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
                            placeholder="Enter Total Income"
                            required
                            className="form-control"
                            value={this.state.department}
                            onChange={this.onChangeDepartment}
                        />
                    </div>
                    

                    <div className="col-auto">
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>
                
               <br/> <br/> 

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
                            placeholder="Enter Total Income"
                            required
                            className="form-control"
                            value={this.state.department}
                            onChange={this.onChangeDepartment}
                        />
                    </div>
                    
                    
                    <div className="col-auto">
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}