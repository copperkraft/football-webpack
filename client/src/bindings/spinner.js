import ko from 'knockout';
import Spinner from 'spin';

ko.bindingHandlers.spinner = {
    init(element) {
        element.spinner = new Spinner();
    },
    update(element, valueAccessor) {
        if (!valueAccessor()()) {
            element.spinner.spin(element);
        } else {
            element.spinner.stop();
        }
    }
};