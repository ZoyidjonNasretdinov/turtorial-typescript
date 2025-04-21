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