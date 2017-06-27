import ko from 'knockout';

ko.bindingHandlers.date = {
    update(element, valueAccessor) {
        element.innerHTML = '#teams/' + valueAccessor().toDateString(); //todo: move 'teams' to constants
    }
};