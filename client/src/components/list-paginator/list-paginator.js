import './list-paginator.less';
import template from 'components/list-paginator/list-paginator.html';
import register from 'components/component-registrator';

const defaultPage = 1;

class ListPaginatorViewModel {
    constructor(params) {
        this.pageSizes = [5, 10, 15, 20];

        this.currentPage = params.currentPage;
        this.pageCount = params.pageCount;
        this.pageSize = params.pageSize;
        this.pageSize.subscribe(() => this.currentPage(defaultPage));
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

register('list-paginator', template, ListPaginatorViewModel);