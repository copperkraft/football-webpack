import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './paginator.less';
import {initialPage, pageSizes} from 'constants/pagination';

export default class Paginator extends Component {
    constructor() {
        super();

        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.goToPreviousPage = this.goToPreviousPage.bind(this);
        this.goToNextPage = this.goToNextPage.bind(this);
        this.goToFirstPage = this.goToFirstPage.bind(this);
        this.goToLastPage = this.goToLastPage.bind(this);
    }

    handleSizeChange(event) {
        this.props.onSizeChange(+event.target.value);
    }

    goToPreviousPage() {
        const {page} = this.props;
        if (page > 0) {
            this.props.onPageChange(page - 1);
        }
    }

    goToNextPage() {
        const {page, maxPage} = this.props;
        if (maxPage > page) {
            this.props.onPageChange(page + 1);
        }
    }

    goToFirstPage() {
        this.props.onPageChange(initialPage);
    }

    goToLastPage() {
        const {maxPage} = this.props;
        this.props.onPageChange(maxPage);
    }

    render() {
        return (
            <div className="pagination">
                <label className="pagination__item">
                    <select className="pagination__select" onChange={this.handleSizeChange} defaultValue={this.props.pageSize}>
                        {pageSizes.map(size => <option key={size} value={size}>{size}</option>)}
                    </select>
                </label>
                <div onClick={this.goToFirstPage} className="pagination__item">first</div>
                <div onClick={this.goToPreviousPage} className="pagination__item">prev</div>
                <div className="pagination__item">
                    {this.props.page}/{this.props.maxPage}
                </div>
                <div onClick={this.goToNextPage} className="pagination__item">next</div>
                <div onClick={this.goToLastPage} className="pagination__item">last</div>
            </div>
        );
    }
}

Paginator.propTypes = {
    onSizeChange: PropTypes.func,
    onPageChange: PropTypes.func,
    page: PropTypes.number,
    maxPage: PropTypes.number,
    pageSize: PropTypes.number
};