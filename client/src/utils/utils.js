export const errorThrower = function (message) {
    throw new Error(message)
}

export const notLongEnoughError = function (field, len) {
    errorThrower(`${field} must be at least ${len} characters long`)
}

export const dataChecker = function (data) {
    for (const [key, value] of Object.entries(data)) {
        if (!value) {
            errorThrower(`${key[0].toUpperCase() + key.substring(1)} is required`)
        }
    }
    return true
}