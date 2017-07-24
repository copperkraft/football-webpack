import ko from 'knockout';
import Pikaday from 'pikaday';

ko.bindingHandlers.calendar = {
    init(element, valueAccessor) {
        element.value = ko.unwrap(valueAccessor().value) || new Date();

        element.picker = new Pikaday({
            yearRange: [1900, 2020],
            field: element,
            defaultDate: element.value,
            toString: date => date ? date.toDateString() : '',
            parse: dateString => new Date(dateString)
        });

        ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
            element.picker.destroy();
        });

        element.addEventListener('change', () => {
            valueAccessor().value(element.value);
        });
    },
    update(element, valueAccessor) {
        let {value, from, to} = valueAccessor();
        [value, from, to] = [value, from, to].map(item => ko.unwrap(item));

        value && element.picker.setDate(value, false);
        from && element.picker.setMinDate(from);
        to && element.picker.setMaxDate(to);
    }
};