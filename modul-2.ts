// type arrowing
const logError = (error: string | string[]): void => {
    if (Array.isArray(error)) {
        error.forEach((err: string) => console.error(err));
    } else {
        console.error(error);
    }
}


// literal types meainging that the value of the type is fixed

type requestStatus = 'success' | 'error' | 'loading' 

function getStatus(status: requestStatus): {
    status: requestStatus;
    message: string;
} {
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

// type alias
type User = {
    id: number;
    name: string;
    email: string;
    age: number;        
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    lastLogin: Date | null;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    phoneNumbers: string[];
    isAdmin: boolean;
    roles: string[];
    permissions: string[];
    profilePicture: string | null;
    bio: string | null;
    website: string | null;
    socialMedia: {
        facebook: string | null;
        twitter: string | null;
        instagram: string | null;
     }
    };



// type assertion

type Person = {
    name: string;
    age: number;
    email: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
}

type Employee = {
    id: number;
    position: string;
    salary: number;
    hireDate: Date;
    department: string;
    isActive: boolean;
}

type CustomWorkerType = Person & Employee;

let worker: CustomWorkerType = {
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

}
// type assertion


//interface

interface PersonInterface {
    name: string;
    age: number;
    email: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
}

    