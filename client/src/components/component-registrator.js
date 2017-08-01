import ko from 'knockout';

export default (name, template, viewModel) => {
    if (!ko.components.isRegistered(name)) {
        if (viewModel) {
            ko.components.register(name, {viewModel, template});
        } else {
            ko.components.register(name, {template});
        }
    }
};