import ko from 'knockout';
import routeNames from 'constants/routes';

ko.bindingHandlers.teamLink = {
    update(element, valueAccessor) {
        element.href = `#${routeNames.teamPage}/${valueAccessor()}`;
    }
};