import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryCreate from './categoryCreate';
import { actGetAllCategoryRequest,  actDeleteCategoryRequest } from '../../action/index';
import Pagination from './../../ultils/Pagination';
class CategoryList extends Component {
    constructor(props) {
        super(props);
         // an example array of 150 items to be paged
         var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
 
         this.state = {
             exampleItems: exampleItems,
             pageOfItems: []
         };
  
         // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
         this.onChangePage = this.onChangePage.bind(this);
    };
    onChangePage(pageOfItems) {
        // update state with new page of items
        // this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {
        this.props.getAllCategories();
    };
    render() {

        var { categories } = this.props;
        return (
            <div>
                {/* MAIN CONTENT*/}

                <div className="main-content">

                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="title-5 m-b-35">Cú test</h3>
                                    <div className="table-data__tool">
                                        <div className="table-data__tool-left">
                                            <div className="rs-select2--light rs-select2--md">
                                                <select className="js-select2" name="property">
                                                    <option >All Properties</option>
                                                    <option value="">Option 1</option>
                                                    <option value="">Option 2</option>
                                                </select>
                                                <div className="dropDownSelect2"></div>
                                            </div>
                                            <div className="rs-select2--light rs-select2--sm">
                                                <select className="js-select2" name="time">
                                                    <option >Today</option>
                                                    <option value="">3 Days</option>
                                                    <option value="">1 Week</option>
                                                </select>
                                                <div className="dropDownSelect2"></div>
                                            </div>
                                            <button className="au-btn-filter">
                                                <i className="zmdi zmdi-filter-list"></i>filters</button>
                                        </div>
                                        <div className="table-data__tool-right">
                                            <button className="au-btn au-btn-icon au-btn--green au-btn--small" data-toggle="modal" data-target="#largeModal">
                                                <i className="zmdi zmdi-plus"></i>Thêm mới</button>
                                            <div className="rs-select2--dark rs-select2--sm rs-select2--dark2">
                                                <select className="js-select2" name="type">
                                                    <option >Export</option>
                                                    <option value="">Option 1</option>
                                                    <option value="">Option 2</option>
                                                </select>
                                                <div className="dropDownSelect2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-t-30">
                                <div className="col-md-12">
                                    {/* DATA TABLE*/}
                                    <div className="table-responsive table--no-card m-b-30">

                                        <table className="table table-borderless table-striped table-earning">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Tên</th>
                                                    <th>Level</th>
                                                    <th>Loại cha</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.showcategory(categories)}

                                            </tbody>
                                        </table>
                                     
                                    </div>
                                    {/* END DATA TABLE*/}
                                    <div>
                                      <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />

                                      </div>

                                </div>
                                
                            </div>

                        </div>

                    </div>
                    <CategoryCreate></CategoryCreate>
                </div>
                {/* END MAIN CONTENT*/}


            </div >

        );
    }

    // write function here
    showcategory(categories) {
        var result = null;
        if (categories != null && categories.length > 0) {
            result = categories.map((category, index) => {
                return (
                    <tr key={index}>
                        <td>{category.CategoryID}</td>
                        <td>{category.CategoryName}</td>
                        <td>{category.CategoryLevel}</td>
                        <td>{category.ParentName}</td> 
                        <td>
                            <button className="btn btn-sm btn-primary" ><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn  btn-sm btn-danger" onClick={() => this.DeleteCategories(category.CategoryID)}><i className="fas fa-trash"></i></button>
                        </td>
                    </tr>
                )
            })
        }
        return result;
    }
    // Delete
    DeleteCategories(id) {
       this.props.onDeleteCategory(id);
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllCategories: () => {
            dispatch(actGetAllCategoryRequest())
        },
        onDeleteCategory: (id) => {
            dispatch(actDeleteCategoryRequest(id))
        }
    }
}
const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
//export default CategoryList;

