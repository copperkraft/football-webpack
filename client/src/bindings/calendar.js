import ko from 'knockout';
import Pikaday from 'pikaday';

ko.bindingHandlers.calendar = {
    init(element, valueAccessor) {
        let value = ko.unwrap(valueAccessor().value);
        value = value || new Date();
        value = value instanceof Date ? value : new Date(value);

        element.value = value.toDateString();

        const pickerInstance = new Pikaday({
            yearRange: [1900, 2020],
            field: element,
            minDate: valueAccessor().from ? new Date(valueAccessor().from()) : null,
            maxDate: valueAccessor().from ? new Date(valueAccessor().to()) : null,
            defaultDate: element.value,
            toString: date => date.toDateString(),
            parse: dateString => new Date(dateString)
        });

        ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
            pickerInstance.destroy();
        });

        element.addEventListener('change', () => {
            valueAccessor().value(element.value);
        });
    }
};