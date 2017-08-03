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
        if (page > 1) {
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
        const {page} = this.props;
        if (page !== initialPage) {
            this.props.onPageChange(initialPage);
        }
    }

    goToLastPage() {
        const {page, maxPage} = this.props;
        if (page !== maxPage) {
            this.props.onPageChange(maxPage);
        }
    }

    render() {
        const {page, maxPage, pageSize} = this.props;
        return (
            <div className="pagination">
                <label className="pagination__item">
                    <select
                        className="pagination__select"
                        onChange={this.handleSizeChange}
                        defaultValue={pageSize}>
                        {pageSizes.map(size => <option key={size} value={size}>{size}</option>)}
                    </select>
                </label>
                <div
                    onClick={this.goToFirstPage}
                    className={'pagination__item ' + (page === initialPage ? 'pagination__page--disabled' : '')}>
                    first
                </div>
                <div
                    onClick={this.goToPreviousPage}
                    className={'pagination__item ' + (page === initialPage ? 'pagination__page--disabled' : '')}>
                    prev
                </div>
                <div className="pagination__item pagination__page--disabled">
                    {this.props.page}/{this.props.maxPage}
                </div>
                <div
                    onClick={this.goToNextPage}
                    className={'pagination__item ' + (page === maxPage ? 'pagination__page--disabled' : '')}>
                    next
                </div>
                <div
                    onClick={this.goToLastPage}
                    className={'pagination__item ' + (page === maxPage ? 'pagination__page--disabled' : '')}>
                    last
                </div>
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