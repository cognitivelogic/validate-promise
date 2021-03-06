"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const required = (value, row, msg) => {
    return new Promise((resolve, reject) => {
        if ((typeof value === 'string' && value.trim() !== '') && value !== undefined) {
            return resolve();
        }
        if (typeof value === 'number') {
            return resolve();
        }
        if (typeof value === 'object' && value !== null) {
            const mergedValue = Object.keys(value).reduce((prev, next) => prev + String(value[next]), '');
            if (mergedValue.trim() !== '') {
                return resolve();
            }
        }
        return reject(msg(String(value), row));
    });
};
exports.default = required;
