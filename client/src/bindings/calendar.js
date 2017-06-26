import ko from 'knockout';
import Pikaday from 'pikaday';

ko.bindingHandlers.calendar = {
    init: function(element, valueAccessor) {
        element.value = valueAccessor().value();

        const pickerInstanse = new Pikaday({
            field: element,
            minDate: new Date(valueAccessor().from()),
            maxDate: new Date(valueAccessor().to()),
            defaultDate: new Date(valueAccessor().value()),
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