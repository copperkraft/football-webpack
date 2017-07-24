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
            this.currentPage(initialPage);
        });
        this.pageSizeSubscription = this.pageSize.subscribe(() => {
            this.currentPage(initialPage);
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
        this.currentPage(1);
    }

    goToLastPage() {
        this.currentPage(this.pageCount());
    }
}

register('list-paginator', template, ListPaginatorViewModel);