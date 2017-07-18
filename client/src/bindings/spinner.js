import ko from 'knockout';
import Spinner from 'spin';

ko.bindingHandlers.spinner = {
    init(element, valueAccessor) {
        const spinner = new Spinner();

        spinner.spin(element);

        valueAccessor().subscribe(value => {
            if(!value) {
                spinner.spin(element);
            } else {
                spinner.stop();
            }
        });

    }
};