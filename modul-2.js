"use strict";
// type arrowing
const logError = (error) => {
    if (Array.isArray(error)) {
        error.forEach((err) => console.error(err));
    }
    else {
        console.error(error);
    }
};
function getStatus(status) {
    switch (status) {
        case 'success':
            return { status, message: 'Request was successful' };
        case 'error':
            return { status, message: 'Request failed' };
        case 'loading':
            return { status, message: 'Request is loading' };
        default:
            throw new Error('Invalid status');
    }
}
let worker = {
    name: 'John Doe',
    age: 30,
    email: '',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    },
    id: 1,
    position: 'Software Engineer',
    salary: 100000,
    hireDate: new Date('2020-01-01'),
    department: 'Engineering',
    isActive: true
};
// type assertion
