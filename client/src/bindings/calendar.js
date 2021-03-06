import ko from 'knockout';
import Pikaday from 'pikaday';

ko.bindingHandlers.calendar = {
    init(element, valueAccessor) {
        let {from, to, value} = valueAccessor();
        [from, to] = [from, to].map(item => ko.unwrap(item));

        element.value = value().toDateString();

        element.picker = new Pikaday({
            yearRange: [1900, 2020],
            field: element,
            defaultDate: value(),
            minDate: from,
            maxDate: to,
            toString: date => date ? date.toDateString() : '',
            parse: dateString => new Date(dateString)
        });

        ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
            element.picker.destroy();
        });

        element.addEventListener('change', () => {
            value(element.value);
        });
    }
};