import ko from 'knockout';

const routes = {
    team: '#teams/:id'
};

ko.bindingHandlers.href = {
    update(element, valueAccessor) {
        element.href = routes[valueAccessor().route]
            .replace(/:(\w+)/g, (match, template) => valueAccessor()[template]);
    }
};