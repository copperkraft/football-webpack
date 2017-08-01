import ko from 'knockout';
import {routes} from 'constants/routes';

ko.bindingHandlers.href = {
    update(element, valueAccessor) {
        element.href = '#' + routes[valueAccessor().route]
            .replace(/:(\w+)/g, (match, template) => valueAccessor()[template]);
    }
};