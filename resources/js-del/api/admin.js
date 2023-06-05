const admin = {
    getAdminInfo(cb, errorCB) {
        axios
        .get(window.API_URL+'admin/getAdminInfo')
        .then(resp => {
        
            if (resp.status == 200) {
                cb(resp.data)
            }
        })
        .catch(err => {
            errorCB(err.response.data)
        })
    },
    getUsers(cb, errorCB) {
        axios
        .get(window.API_URL+'admin/getUsers')
        .then(resp => {
        
            if (resp.status == 200) {
                cb(resp.data)
            }
        })
        .catch(err => {
            errorCB(err.response.data)
        })
    },
    createUser(data, cb, errorCB) {
        axios
        .post(window.API_URL+'admin/createUser', data)
        .then(resp => {
        
            if (resp.status == 200) {
                cb(resp.data)
            }
        })
        .catch(err => {
            errorCB(err.response.data)
        })
    },
    updateAdminInfo(data, cb, errorCB) {
        axios
        .post(window.API_URL+'admin/updateAdminInfo', data)
        .then(resp => {
        
            if (resp.status == 200) {
                cb(resp.data)
            }
        })
        .catch(err => {
            errorCB(err.response.data)
        })
    },
    updateProfileInfo(data, cb, errorCB) {
        axios
        .post(window.API_URL+'admin/updateProfileInfo', data)
        .then(resp => {
        
            if (resp.status == 200) {
                cb(resp.data)
            }
        })
        .catch(err => {
            errorCB(err.response.data)
        })
    },
    updatePassword(data, cb, errorCB){
        axios
        .post(window.API_URL+'admin/updatePassword', data)
        .then(resp => {
        
            if (resp.status == 200) {
                cb(resp.data)
            }
        })
        .catch(err => {
            errorCB(err.response.data)
        })
    },
    updateEmail(data, cb, errorCB){
        axios
        .post(window.API_URL+'admin/updateEmail', data)
        .then(resp => {
        
            if (resp.status == 200) {
                cb(resp.data)
            }
        })
        .catch(err => {
            errorCB(err.response.data)
        })
    },
    getAppLinks(cb, errorCB){
        axios
        .get(window.API_URL+'admin/getAppLinks')
        .then(resp => {
            if (resp.status == 200) {
                cb(resp.data)
            }
        })
        .catch(err => {
            errorCB(err.response.data)
        })
    },
    getUserLogs(cb, errorCB){
        axios
        .get(window.API_URL+'admin/getUserLogs')
        .then(resp => {
            if (resp.status == 200) {
                cb(resp.data)
            }
        })
        .catch(err => {
            errorCB(err.response.data)
        })
    },
    logout(cb, errorCB) {
        axios
        .post(window.API_URL+'logout')
        .then(resp => {
        
            if (resp.status == 200) {
                cb(resp.data)
            }
        })
        .catch(err => {
            errorCB(err.response.data)
        })
    },
}

export default admin
