import './list-paginator.less';
import template from 'components/list-paginator/list-paginator.html';
import register from 'components/component-registrator';

import {pageSizes, initialPage} from 'constants/pagination';

class ListPaginatorViewModel {
    constructor(params) {
        this.pageSizes = pageSizes;

        this.currentPage = params.currentPage;
        this.pageCount = params.pageCount;
        this.pageSize = params.pageSize;

        this.pageCountSubscription = this.pageCount.subscribe(() => {
            this.goToFirstPage();
        });
        this.pageSizeSubscription = this.pageSize.subscribe(() => {
            this.goToFirstPage();
        });
    }

    dispose() {
        this.pageCountSubscription.dispose();
        this.pageSizeSubscription.dispose();
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
        this.currentPage(initialPage);
    }

    goToLastPage() {
        this.currentPage(this.pageCount());
    }
}

register('list-paginator', template, ListPaginatorViewModel);