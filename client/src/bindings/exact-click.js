import ko from 'knockout';

ko.bindingHandlers.exactClick = {
    init(element, valueAccessor) {
        const callback = valueAccessor();

        element.addEventListener('click', (event) => {
            if (event.target === element) {
                callback();
            }
        });
    }
};