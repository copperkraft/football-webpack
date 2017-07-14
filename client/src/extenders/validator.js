import ko from 'knockout';

ko.extenders.validator = function(target, options) {
    target.problem = ko.observable();

    function validate(newValue) {
        if (!newValue && options.required) {
            target.problem('required');
            return;
        }
        if (options.template && !options.template.test(newValue)) {
            target.problem('mismatch');
            return;
        }
        target.problem(false);
    }
    validate(target());
    target.subscribe(validate);

    return target;
};