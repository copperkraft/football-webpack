import ko from 'knockout';

import './list-paginator.less';
import template from 'components/list-paginator/list-paginator.html';

class TeamsViewModel {
    constructor(params) {
        if (params.array) {
            this.array = params.array;
        }
        this.parentComponent = params.parentComponent;
        this.pageSize =  ko.observable(5);
        this.currentPage = ko.observable(0);
        this.displayedItems = ko.pureComputed(() => {
            const first = this.currentPage() * this.pageSize();
            return this.array().slice(first, first + this.pageSize());
        });
        this.pageCount = ko.pureComputed(() => {
            return Math.ceil(this.array().length / this.pageSize());
        });
    }

    goToPreviousPage() {
        if (this.currentPage() > 0) {
            this.currentPage(this.currentPage() - 1);
        }
    }

    goToNextPage() {
        if (this.pageCount() - 1 > this.currentPage()) {
            this.currentPage(this.currentPage() + 1);
        }
    }

    goToFirstPage() {
        return this.currentPage(0);
    }

    goToLastPage() {
        return this.currentPage(this.pageCount() - 1);
    }
}

export {TeamsViewModel as viewModel, template};