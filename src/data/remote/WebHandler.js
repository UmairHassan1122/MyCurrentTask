import axios from 'axios'
import PrefHandler from '../local/PrefHandler'

const prefs = new PrefHandler()
export default class WebHandler {

    /////////////////////////////// Post Method ///////////////////////////
    sendPostDataRequest(url, bodyParams, onSuccess) {

        prefs.getSession((result) => {

            let headers = {
                'Content-Type': 'application/json',
            }

            if (result.token) {
                headers.Authorization = result.token
            }

            console.log("------------API POST REQUEST--------------")
            console.log("URL==>", url)
            console.log("HEADER==>", headers)
            console.log("BODYPARAMS==>", JSON.stringify(bodyParams))

            axios.post(url, bodyParams, {
                headers: headers,
            }).then(async (response,) => {
                const respJson = response.data
                console.log("RESPOSNE==>", JSON.stringify(respJson))

                onSuccess(respJson)

            }).catch((error) => {
                console.log("RESPOSNE==>", error);
                onSuccess(error.message)
            })

        })
    }

    //////////////////////////////////// Get Method //////////////////////////////////////
    async sendGetDataRequest(url, params, onSuccess, onFailure) {

        let headers = { 'Content-Type': 'application/x-www-form-urlencoded', }

        console.log("------------API GET REQUEST--------------")
        console.log("URL==>", url)
        console.log("HEADER==>", headers)
        console.log("PARAMS==>", params)

        axios.get(url, {
            headers: headers,
            params: params,
        }).then((response) => {
            const respJson = response.data
            // console.log("RESPOSNE==>", JSON.stringify(respJson, null, 3))
            if (respJson.status == true) {
                onSuccess(respJson)
            } else {
                onFailure(respJson.message)
            }
        }).catch((error) => {
            console.log("RESPOSNE==>", error);

            onFailure(error.message)
        })
    }

    sendGetRequest(url, onSuccess, onFailure) {
        console.log("Url", url)
        axios.get(url)
            .then((resp) => {
                const respJson = resp.data
                onSuccess(respJson)
            })
            .catch((error) => {
                console.log(error)
                onFailure(error)
            })
    }

}


