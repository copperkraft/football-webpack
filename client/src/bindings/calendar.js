import ko from 'knockout';
import Pikaday from 'pikaday';

ko.bindingHandlers.calendar = {
    init(element, valueAccessor) {
        let value = ko.unwrap(valueAccessor().value); //value can be observable or not
        value = value || new Date(); //default value is current date
        value = value instanceof Date ? value : new Date(value); //value can be string or Date object

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