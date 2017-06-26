import ko from 'knockout';

export default (name, viewModel, template) => {
    if(!ko.components.isRegistered(name)) {
        if (template) {
            ko.components.register(name, {viewModel, template});
        } else {
            ko.components.register(name, {viewModel});
        }
        console.log('registered component', name);

    } else {
        console.log('already registered', name);
    }
};