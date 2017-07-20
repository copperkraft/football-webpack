import ko from 'knockout';

ko.bindingHandlers.date = {
    update(element, valueAccessor) {
        element.innerHTML = new Date(valueAccessor()).toDateString();
    }
};