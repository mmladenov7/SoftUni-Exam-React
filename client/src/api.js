class BaseApi {
    constructor() {
        this.baseUrl = 'http://localhost:5000/'
        this.requestHandler = this._requestHandler.bind(this)
    }

    async _requestHandler(method, url, data) {
        let currentUrl = this.baseUrl + url
        const settings = {
            method,
            headers: {}
        }

        if (data) {
            settings.headers["Content-Type"] = "application/json"
            settings.body = JSON.stringify(data)
        }

        let response = await fetch(currentUrl, settings)
        return response

    }

    async get(url, data) {
        return this.requestHandler("GET", url, data)
    }

    async post(url, data) {
        return this.requestHandler("POST", url, data)
    }

    async put(url, data) {
        return this.requestHandler("PUT", url, data)
    }

    async del(url, data) {
        return this.requestHandler("DELETE", url, data)
    }
}

const apiFetch = new BaseApi()

export default apiFetch