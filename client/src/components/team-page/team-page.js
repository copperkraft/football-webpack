import ko from 'knockout';

import './team-page.less';
import template from 'components/team-page/team-page.html';
import register from 'components/component-registrator';

import {teamInfo} from 'providers/team-info';

import 'components/info-tab/info-tab';
import 'components/fixtures-tab/fixtures-tab';

class ViewModel {
    constructor(params) { //TODO remove js from html
        this.team = ko.observable();
        teamInfo.get(params.id).then(data => this.team(data));

        this.selectedTab = ko.observable('fixtures-tab');

        this.tab = ko.pureComputed(function () {
            return {
                name: this.selectedTab,
                params: {
                    id: params.id,
                    name: this.team() ? this.team().name : ''
                }
            };
        }, this);
    }

    setSelection(select) {
        this.selectedTab(select);
    }

    isSelected(tab) {
        return this.selectedTab() === tab;
    }
}

register('team-page', ViewModel, template);