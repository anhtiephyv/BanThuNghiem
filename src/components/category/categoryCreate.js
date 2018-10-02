import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddCategoryRequest } from './../../action/index';
import TreeView from 'deni-react-treeview';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';
import Select from 'react-validation/build/select'; 
import CheckButton from 'react-validation/build/button';
import * as ValidateConst from '../../ultils/validator';
//import './Treeview.css';
class CategoryCreate extends Component {
    fruitsAndVegetables = [
        {
            id: 100,
            text: 'Fruits',
            children: [
                {
                    id: 101,
                    text: 'Orange',
                    isLeaf: true
                },
                {
                    id: 102,
                    text: 'Banana',
                    isLeaf: true
                }
            ]
        },
        {
            id: 200,
            text: 'Vegetables',
            children: [
                {
                    id: 201,
                    text: 'Carrot',
                    isLeaf: true
                },
                {
                    id: 202,
                    text: 'Tomato',
                    isLeaf: true
                }
            ]
        }
    ];
    constructor(props) {
        super(props);
        this.state = {
            category: {}
        }
    };
    inputOnChange = (e, key) => {
        debugger;
        let category = this.state.category;
        category[key] = e.target.value;
        this.setState({ category })
    };
    createData = (e) => {
        e.preventDefault();
        this.form.validateAll();
debugger;
        if ( this.checkBtn.context._errors.length === 0 ) {
            this.props.onAddCategory(this.state.category);
            $('#largeModal').modal('toggle');
        }
      
    };
    render() {

        var { category } = this.state;
        return (
            <div className="modal fade" id="largeModal" tabIndex={-1} role="dialog" aria-labelledby="largeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <Form method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={e => this.createData(e)} ref={c => { this.form = c }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="largeModalLabel">Large Modal</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                         

                                <div className="row form-group">
                                    <div className="col col-md-3 text-right">
                                        <label htmlFor="text-input" className=" form-control-label">Tên loại sản phẩm <span style={{ color: 'red' }}>(*)</span></label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <Input type="text"
                                            id="text-input"
                                            name="CategoryName"
                                            placeholder="Tên loại sản phẩm"
                                            className="form-control"
                                            validations={[ValidateConst.required, ValidateConst.minLength(10)]}
                                            onChange={(e) => this.inputOnChange(e, 'CategoryName')}
                                        />
                                        {/* <small className="form-text text-muted">Nhập tên loại sản phẩm</small> */}
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3 text-right">
                                        <label htmlFor="email-input" className=" form-control-label">Loại cha</label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <Input
                                            type="email"
                                            id="email-input"
                                            name="ParentName"
                                            placeholder="Enter Email"
                                            className="form-control"
                                            onChange={(e) => this.inputOnChange(e, 'ParentCategory')} />
                                        <TreeView
                                         items={this.fruitsAndVegetables}
                                         showIcon={ false } />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3 text-right">
                                        <label htmlFor="text-sort" className=" form-control-label">Sắp xếp <span style={{ color: 'red' }}>(*)</span></label>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <Input
                                            type="number"
                                            id="text-sort"
                                            name="DisplayOrder"
                                            placeholder="Sắp xếp"
                                            className="form-control"
                                            onChange={(e) => this.inputOnChange(e, 'DisplayOrder')} />

                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3 text-right">
                                        <label htmlFor="textarea-input" className=" form-control-label">Mô tả</label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <Textarea
                                            name="Description"
                                            id="textarea-input" rows={9}
                                            placeholder="Content..."
                                            className="form-control"
                                           // defaultValue={""}
                                            onChange={(e) => this.inputOnChange(e, 'Description')}></Textarea>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3 text-right">
                                        <label htmlFor="select" className=" form-control-label">Level</label>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <Select
                                            name="categoryLevel"
                                            id="select"
                                            className="form-control"
                                            onChange={(e) => this.inputOnChange(e, 'categoryLevel')}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>

                                        </Select>
                                    </div>
                                </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button  type="submit" className="btn btn-primary" >Confirm</button>
                            <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                        </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddCategory: (category) => {
            dispatch(actAddCategoryRequest(category))
        },
        // onDeleteCategory: (id) => {
        //     dispatch(actDeleteCategoryRequest(id))
        // }
    }
}
export default connect(null, mapDispatchToProps)(CategoryCreate);
//export default CategoryCreate;


