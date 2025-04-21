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
