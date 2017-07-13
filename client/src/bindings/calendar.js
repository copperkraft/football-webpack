import ko from 'knockout';
import Pikaday from 'pikaday';

ko.bindingHandlers.calendar = {
    init(element, valueAccessor) {
        element.value = new Date(valueAccessor().value()).toDateString();
        const pickerInstanse = new Pikaday({
            field: element,
            minDate: valueAccessor().from ? new Date(valueAccessor().from()) : null,
            maxDate: valueAccessor().from ? new Date(valueAccessor().to()) : null,
            defaultDate: element.value,
            toString: date => date.toDateString(),
            parse: dateString => new Date(dateString)
        });

        ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
            pickerInstanse.destroy();
        });

        element.addEventListener('change', () => {
            valueAccessor().value(element.value);
        });
    }
};