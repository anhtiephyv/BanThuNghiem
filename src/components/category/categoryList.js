import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryCreate from './categoryCreate';
import { actGetAllCategoryRequest, actDeleteCategoryRequest } from '../../action/index';
import Pagination from './../../ultils/Pagination';
class CategoryList extends Component {
    constructor(props) {
        super(props);
        // an example array of 150 items to be paged
        var exampleItems = [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onPageChanged = this.onPageChanged.bind(this);
    };
    onPageChanged(pageOfItems) {
        let Items = this.state.exampleItems;
        debugger;
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
                                            <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
                                            <button className="btn btn-primary" type="submit"><i className="zmdi zmdi-search"></i> Tìm kiếm</button>
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
                                        <table className="table table-bordered  table-striped table-earning">
                                            <thead>
                                                <tr>
                                                    <th>Id <i className="fa fa-sort float-right" aria-hidden="true"></i></th>
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
                                        <Pagination totalRecords={243} pageLimit={20} pageNeighbours={1} onPageChanged={this.onPageChanged} />

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

