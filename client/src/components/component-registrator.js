import ko from 'knockout';

export default (name, viewModel, template) => {
    if(!ko.components.isRegistered(name)) {
        console.log('registered component', name);
        ko.components.register(name, {viewModel, template});
    } else {
        console.log('already registered', name);
    }
};