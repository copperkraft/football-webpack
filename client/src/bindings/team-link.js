import ko from 'knockout';

ko.bindingHandlers.teamLink = {
    update(element, valueAccessor) {
        element.href = '#teams/' + valueAccessor(); //todo: move 'teams' to constants
    }
};