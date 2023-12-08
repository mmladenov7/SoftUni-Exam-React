import { dataChecker, errorThrower, notLongEnoughError } from "../../utils/utils"


export const postValidator = function (data) {
    dataChecker(data)

    if (data.imageUrl.length < 10) {
        notLongEnoughError('Image URL', 10)
    }
    if (data.brand.length < 2) {
        notLongEnoughError('Brand', 2)
    }
    if (data.model.length < 2) {
        notLongEnoughError('Model', 2)
    }
    if (Number(data.productionYear) < 1886) {
        errorThrower('Production year must be equal or abover 1886')
    }
    if (data.description.length < 5) {
        notLongEnoughError('Description', 5)
    }

    return true
}