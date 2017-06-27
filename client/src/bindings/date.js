import ko from 'knockout';

ko.bindingHandlers.date = {
    update(element, valueAccessor) {
        element.innerHTML = valueAccessor();
    }
};