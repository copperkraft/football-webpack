import ko from 'knockout';

import './list-paginator.less';
import template from 'components/list-paginator/list-paginator.html';
import register from 'components/component-registrator';

class ViewModel {
    constructor(params) {
        if (params.array) {
            this.array = params.array;
        }
        this.parentComponent = params.parentComponent;
        this.pageSizes = [5, 10, 15, 20];
        this.pageSize =  ko.observable(this.pageSizes[0]);
        this.currentPage = ko.observable(1);
        this.displayedItems = ko.pureComputed(() => {
            const first = (this.currentPage() - 1) * this.pageSize();
            return this.array().slice(first, first + this.pageSize());
        });
        this.pageCount = ko.pureComputed(() => {
            return Math.ceil(this.array().length / this.pageSize());
        });
    }

    goToPreviousPage() {
        if (this.currentPage() > 1) {
            this.currentPage(this.currentPage() - 1);
        }
    }

    goToNextPage() {
        if (this.pageCount() > this.currentPage()) {
            this.currentPage(this.currentPage() + 1);
        }
    }

    goToFirstPage() {
        this.currentPage(1);
    }

    goToLastPage() {
        this.currentPage(this.pageCount());
    }
}

register('list-paginator', ViewModel, template);