export const errorThrower = function (message) {
    throw new Error(message)
}

export const dataChecker = function (data) {
    for (const [key, value] of Object.entries(data)) {
        if (!value) {
            errorThrower(`${key} is required`)
        }
    }
    return true
}