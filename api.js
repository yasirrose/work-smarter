import Vue from "vue";


var API_URL = 'http://127.0.0.1:8000/api/'
var API_URL_CIT = 'http://127.0.0.1:8000/api/citizen/'

// var API_URL = 'http://watch-spotter.test/api/'
// var API_URL_CIT = 'http://watch-spotter.test/api/citizen/'

// var API_URL = 'https://test.watchspotter.app/api/'
// var API_URL_CIT = 'https://test.watchspotter.app/api/citizen/'

// var API_URL = process.env.VUE_APP_ENDPOINT + '/api/'
// var API_URL_CIT = process.env.VUE_APP_ENDPOINT + '/api/citizen/'

// var API_URL = '/api/'
// var API_URL_CIT = '/api/citizen/'
import axios from 'axios'
import router from "./router";
// import i18n from '@/i18n';

window.axios = axios

// window.axios.interceptors.request.use(request => {
//     var citizenVal = false;
//     if (request.url.indexOf("project") > -1) {
//         citizenVal = true
//     }
//     if (citizenVal === false && request.url !== API_URL + 'register/spotter' && request.url !== API_URL + 'login/spotter') {
//         const token = localStorage.getItem('isLoggedin');
//         if (token) {
//             request.headers.common['Authorization'] = `Bearer ${token}`
//             request.headers.common['Content-Type'] = 'application/json'
//         }
//     }
//     request.params = request.params || {};
//     request.params['lang'] = String(i18n.locale);
//     return request
// }, function (error) {
//     if (error.response.status === 401) {
//         localStorage.removeItem('userPermissions');
//         localStorage.removeItem('isLoggedin');
//         localStorage.removeItem('email');
//         localStorage.removeItem('password');
//         router.push("/");
//     }
// })

// Add a 401 response interceptor
// window.axios.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     if (401 === error.response.status) {
//         localStorage.removeItem('userPermissions');
//         localStorage.removeItem('isLoggedin');
//         localStorage.removeItem('email');
//         localStorage.removeItem('password');
//         router.push("/");
//     } else {
//         return Promise.reject(error);
//     }
// });

const API = {
    resetPassword(data, cb, errorCB) {
        axios
            .post(API_URL + 'callResetPassword', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
        },
   register(data, cb, errorCB) {
        axios
            .post(API_URL + 'register', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
            .catch(err => {

                errorCB(err.response.data)
            })
    }, login(data, cb, errorCB) {
        axios
            .post(API_URL + 'login', data)
            .then(resp => {
                if (resp.status == 201) {
                    cb(resp.data)
                } else {
                    cb(resp.data)
                }

            })
            .catch(err => {

                errorCB(err.response.data)
            })
    },

    checkEmail(data, cb, errorCB) {
        axios
            .post(API_URL + 'sendResetPasswordEmail', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    add_edit_client(data, cb, errorCB) {
        axios
            .post(API_URL + 'add_edit_client', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    deleteclient(data, cb, errorCB) {
        axios
            .post(API_URL + 'deleteclient', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    deleteUser(data, cb, errorCB) {
        axios
            .post(API_URL + 'deleteUser', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    deleteQuestion(data, cb, errorCB) {
        axios
            .delete(API_URL + 'questions/delete/' + data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    deleteSubQuestion(data, cb, errorCB) {
        axios
            .post(API_URL + 'subQuestions/delete', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    deleteCategory(data, cb, errorCB) {
        axios
            .delete(API_URL + 'categories/delete/' + data, '')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    deleteSpotter(data, cb, errorCB) {
        axios
            .delete(API_URL + 'spotter/delete/' + data, '')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    deleteClientSpot(data, cb, errorCB) {
        axios
            .delete(API_URL + 'spot/delete/' + data, '')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    deleteLocation(data, cb, errorCB) {
        axios
            .delete(API_URL + 'locations/delete/' + data, '')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    restoreLocation(data, cb, errorCB) {
        axios
            .delete(API_URL + 'locations/restore/' + data, '')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    deleteFixLocation(data, cb, errorCB) {
        axios
            .delete(API_URL + 'fixLocation/delete/' + data, '')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    deleteSpot(data, cb, errorCB) {
        axios
            .delete(API_URL + 'spotTypes/delete/' + data, '')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    restoreSpotType(data, cb, errorCB) {
        axios
            .delete(API_URL + 'spotTypes/restore/' + data, '')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    getroles(params, cb, errorCB) {
        axios
            .post(API_URL + 'roles', params)
            .then(resp => {

                if (resp.status == 200) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getUserRoles(cb, errorCB) {
        axios
            .get(API_URL + 'users/getRoles')
            .then(resp => {
                if (resp.status == 200) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getCategories(data, cb, errorCB) {
        axios
            .post(API_URL + 'getCategories', data)
            .then(resp => {
                if (resp.status == 200) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    restoreCategory(data, cb, errorCB) {
        axios
            .delete(API_URL + 'categories/restore/' + data, '')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    checkOrder(data, cb, errorCB) {
        axios
            .post(API_URL + 'checkOrder', data)
            .then(resp => {
                if (resp.status == 200) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    UpdateOrders(data, cb, errorCB) {
        axios
            .post(API_URL + 'UpdateOrders', data)
            .then(resp => {
                if (resp.status == 200) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    // getAcousticCategories(data, cb, errorCB) {
    //     axios
    //         .post(API_URL + 'getAcousticCategories', data)
    //         .then(resp => {
    //             console.log(resp);
    //             if (resp.status == 200) {
    //                 cb(resp.data)
    //             }
    //         })
    //         .catch(err => {
    //             errorCB(err.response)
    //         })
    // },
    getAllUser(param, cb, errorCB) {
        axios
            .post(API_URL + 'users', param)
            .then(resp => {
                if (resp.status == 200) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    loginAs(data, cb, errorCB) {
        axios
            .post(API_URL + 'loginAs', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getEmailConfSettings(cb, errorCB) {
        axios
            .post(API_URL + 'getEmailConfSettings')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    // getAllAcousticQuestions(param, cb, errorCB) {
    //     axios
    //         .post(API_URL + 'getAllAcousticQuestions', param)
    //         .then(resp => {
    //             if (resp.status == 200) {
    //                 cb(resp.data)
    //             }
    //         })
    //         .catch(err => {
    //             errorCB(err.response)
    //         })
    // },
    getAllQuestions(param, cb, errorCB) {
        axios
            .post(API_URL + 'getQuestions', param)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getGeneralQuestions(param, cb, errorCB) {
        axios
            .post(API_URL + 'getGeneralQuestions', param)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getAllQuestionsOrder(param, cb, errorCB) {
        axios
            .post(API_URL + 'getAllQuestionsOrder', param)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getAllCategories(params, cb, errorCB) {
        axios
            .post(API_URL + 'categories', params)
            .then(resp => {
                if (resp.status == 200) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getAllSpotterCategories(params, cb, errorCB) {
        axios
            .post(API_URL + 'spotterCategories', params)
            .then(resp => {
                if (resp.status == 200) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    // getAllAcousticCategories(params, cb, errorCB) {
    //     axios
    //         .post(API_URL + 'acoustic/categories', params)
    //         .then(resp => {
    //             if (resp.status == 200) {
    //                 console.log('ok');
    //                 cb(resp.data)
    //             }
    //         })
    //         .catch(err => {
    //             errorCB(err.response)
    //         })
    // },
    getAllClientSpotters(params, cb, errorCB) {
        axios
            .post(API_URL + 'clientSpotters', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getAllNotificationSpotters(params, cb, errorCB) {
        axios
            .post(API_URL + 'getNotificationSpotters', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getEmailTemplate(data, cb, errorCB) {
        axios
            .post(API_URL + 'get/Email/Template', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    sendSpotterNotifications(params, cb, errorCB) {
        axios
            .post(API_URL + 'sendSpotterNotifications', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    sendWelcomeEmail(params, cb, errorCB) {
        axios
            .post(API_URL + 'sendWelcomeEmail', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    spotterSpotCount(params, cb, errorCB) {
        axios
            .post(API_URL + 'spotterSpotCount', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    spotterBirthdays(params, cb, errorCB) {
        axios
            .post(API_URL + 'spotterBirthdays', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getAllSpots(params, cb, errorCB) {
        axios
            .post(API_URL + 'getAllSpots', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    updateSpotStatus(params, cb, errorCB) {
        axios
            .post(API_URL + 'updateSpotStatus', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getAllLocations(params, cb, errorCB) {
        axios
            .post(API_URL + 'locations', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getArchivedLocations(params, cb, errorCB) {
        axios
            .post(API_URL + 'locations/archived', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getArchivedSpotTypes(params, cb, errorCB) {
        axios
            .post(API_URL + 'spotTypes/archived', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getArchivedCategories(params, cb, errorCB) {
        axios
            .post(API_URL + 'categories/archived', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getAllWeatherLocations(params, cb, errorCB) {
        axios
            .post(API_URL + 'getAllWeatherLocations', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    // getAllAcousticLocations(params, cb, errorCB) {
    //     axios
    //         .post(API_URL + 'acusticlocations', params)
    //         .then(resp => {
    //             cb(resp.data)
    //         })
    //         .catch(err => {
    //             errorCB(err.response)
    //         })
    // },
    getAllSpotType(params, cb, errorCB) {
        axios
            .post(API_URL + 'spotTypes', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    // getAllAcousticSpotType(params, cb, errorCB) {
    //     axios
    //         .post(API_URL + 'getAllAcousticSpotType', params)
    //         .then(resp => {
    //             cb(resp.data)
    //         })
    //         .catch(err => {
    //             errorCB(err.response)
    //         })
    // },
    getAllPermissions(cb, errorCB) {
        axios
            .get(API_URL + 'getAllPermissions')
            .then(resp => {
                if (resp.status == 201) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    add_edit_roles(data, cb, errorCB) {
        axios
            .post(API_URL + 'add_edit_roles', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    get_edit_roles(id, cb, errorCB) {
        axios
            .get(API_URL + 'add_edit_roles/' + id)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    get_edit_user(id, cb, errorCB) {
        axios
            .get(API_URL + 'users/edit/' + id)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    editQuestion(id, cb, errorCB) {
        axios
            .get(API_URL + 'questions/edit/' + id)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getEditCategory(id, cb, errorCB) {
        axios
            .get(API_URL + 'categories/edit/' + id)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getEditLocation(data, cb, errorCB) {
        axios.post(API_URL + 'locations/edit', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getEditWeatherLocation(id, cb, errorCB) {
        axios
            .get(API_URL + 'weather/edit/' + id)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    deleteWeatherLocation(data, cb, errorCB) {
        axios
            .delete(API_URL + 'weather/delete/' + data, '')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    fixLocationsDropdown(params, cb, errorCB) {
        axios
            .post(API_URL + 'fixLocationsDropdown', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getAllFixLocations(params, cb, errorCB) {
        axios
            .post(API_URL + 'fixLocations', params)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getFixLocation(data, cb, errorCB) {
        axios.post(API_URL + 'getFixLocation', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    translateData(data,cb, errorCB) {
        axios.post(API_URL + 'translations', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getEditSpotType(id, cb, errorCB) {
        axios
            .get(API_URL + 'spotTypes/edit/' + id)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getSpotter(id, cb, errorCB) {
        axios.get(API_URL + 'getSpotters/edit/' + id)
            .then(resp => {

                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getSpot(data, cb, errorCB) {
        axios.post(API_URL + 'getSpotData', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getReportSpot(data, cb, errorCB) {
        axios.post(API_URL + 'getReportSpot', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getDashboardData(data, cb, errorCB) {
        axios.post(API_URL + 'getDashboardData', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getQuestionsData(data, cb, errorCB) {
        axios.post(API_URL + 'getQuestionsData', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getSpotPerMonth(data, cb, errorCB) {
        axios.post(API_URL + 'getSpotPerMonth', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getSpotPerLocation(data, cb, errorCB) {
        axios.post(API_URL + 'getSpotPerLocation', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getSpotPerType(data, cb, errorCB) {
        axios.post(API_URL + 'getSpotPerType', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getCategoryPerType(data, cb, errorCB) {
        axios.post(API_URL + 'getCategoryPerType', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getClientUsers(data, cb, errorCB) {
        axios.post(API_URL + 'getClient/users/data', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getUserSpotTypes(data, cb, errorCB) {
        axios.post(API_URL + 'getClient/spotTypes/data', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    // getAcousticUserSpotTypes(cb, errorCB) {
    //     axios.post(API_URL + 'getAcoustic/spotTypes/data')
    //         .then(resp => {
    //             cb(resp.data)
    //         })
    //         .catch(err => {
    //             errorCB(err.response)
    //         })
    // },
    getClientLocations(data, cb, errorCB) {
        axios.post(API_URL + 'getClient/locations/data', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    // getClientAcousticLocations(data, cb, errorCB) {
    //     axios.post(API_URL + 'getAcoustic/locations/data', data)
    //         .then(resp => {
    //             cb(resp.data)
    //         })
    //         .catch(err => {
    //             errorCB(err.response)
    //         })
    // },
    getDataCollectionQuestions(cb, errorCB) {
        axios.get(API_URL + 'getClient/collectionQuestions/data')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    add_edit_users(data, cb, errorCB) {
        axios
            .post(API_URL + 'add_edit_users', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    addUpdateSpotters(data, cb, errorCB) {
        axios
            .post(API_URL + 'addUpdateSpotters', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    updateSpot(data, cb, errorCB) {
        axios.post(API_URL + 'updateSpot', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    addEditQuestion(data, cb, errorCB) {
        axios
            .post(API_URL + 'addUpdateAppQuestion', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    addEditEmailConf(data, cb, errorCB) {
        axios
            .post(API_URL + 'addEditEmailConf', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    // addEditAcousticQuestion(data, cb, errorCB) {
    //     axios
    //         .post(API_URL + 'addUpdateAcousticAppQuestion', data)
    //         .then(resp => {
    //             cb(resp.data)
    //         })
    //         .catch(err => {
    //             errorCB(err)
    //         })
    // },
    addEditCategories(data, cb, errorCB) {
        axios
            .post(API_URL + 'addEditCategories', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    // addEditAcousticCategories(data, cb, errorCB) {
    //     axios
    //         .post(API_URL + 'addEdit/acousticCategories', data)
    //         .then(resp => {
    //             cb(resp.data)
    //         })
    //         .catch(err => {
    //             errorCB(err.response)
    //         })
    // },
    addEditLocations(data, cb, errorCB) {
        axios
            .post(API_URL + 'addEditLocations', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    addEditFixLocations(data, cb, errorCB) {
        axios
            .post(API_URL + 'addEditFixLocations', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    // storeAcousticLocation(data, cb, errorCB) {
    //     axios
    //         .post(API_URL + 'storeAcousticLocation', data)
    //         .then(resp => {
    //             cb(resp.data)
    //         })
    //         .catch(err => {
    //             errorCB(err.response)
    //         })
    // },
    addEditSpotType(data, cb, errorCB) {
        axios
            .post(API_URL + 'addEditSpotTypes', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    // addEditAcousticSpotType(data, cb, errorCB) {
    //     axios
    //         .post(API_URL + 'addEditAcousticSpotTypes', data)
    //         .then(resp => {
    //             cb(resp.data)
    //         })
    //         .catch(err => {
    //             errorCB(err.response)
    //         })
    // },
    updateUserProfile(data, cb, errorCB) {
        axios
            .post(API_URL + 'updateUserProfile', data, { headers: { "Content-Type": "multipart/form-data" } })
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    
    applyWeatherToSpots(data, cb, errorCB) {
        axios
            .post(API_URL + 'applyWeatherToSpots', data, { headers: { "Content-Type": "multipart/form-data" } })
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    updateAppSettings(data, cb, errorCB) {
        axios
            .post(API_URL + 'updateAppSettings', data, { headers: { "Content-Type": "multipart/form-data" } })
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    removeAppImage(data, cb, errorCB) {
        axios
            .post(API_URL + 'removeAppImage', data, { headers: { "Content-Type": "multipart/form-data" } })
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    updateEditorContent(data, cb, errorCB) {
        axios
            .post(API_URL + 'updateEditorContent', data, { headers: { "Content-Type": "multipart/form-data" } })
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    updateEmailTemplateEditorContent(data, cb, errorCB) {
        axios
            .post(API_URL + 'updateEmailTemplateEditorContent', data, { headers: { "Content-Type": "multipart/form-data" } })
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getClientAdminSpots(data, cb, errorCB) {
        axios
            .post(API_URL + 'getClientAdminSpots', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.data)
            })
    },
    async getAppSettings(data, cb, errorCB) {
        const response = await axios
            .post(API_URL + 'getAppSettings', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
        return response;
    },
    saveEditorImage(data, cb, errorCB) {
        axios
            .post(API_URL + 'saveEditorImage', data, { headers: { "Content-Type": "multipart/form-data" } })
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getAuthUser(data, cb, errorCB) {
        axios
            .get(API_URL + 'getUserProfile', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    logout(cb, errorCB) {
        axios
            .post(API_URL + 'logout')
            .then(resp => {
                if (resp.status == 200) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getcleints(params, cb, errorCB) {
        axios.post(API_URL + 'getcleints', params)
            .then(resp => {
                if (resp.status == 200) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    get_client(data, cb, errorCB) {
        axios
            .post(API_URL + 'get_client', data)
            .then(resp => {
                if (resp.status == 200) {
                    cb(resp.data)
                }
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    get_all_cleints(data, cb, errorCB) {
        axios
            .get(API_URL + 'getAllClients', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getSpotDetail(data, cb, errorCB) {
        axios.post(API_URL + 'getSpotDetailForClient', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    getEditSpotCategories(data, cb, errorCB) {
        axios
            .post(API_URL + 'getEditSpotCategories', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    getSelectedSpotCategory(data, cb, errorCB) {
        axios.post(API_URL + 'getClient/selectedSpotCategory/data', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    getPostDataQuestions(data, cb, errorCB) {
        axios.post(API_URL + 'getPostDataQuestions', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    // async getUserData(data, cb, errorCB) {
    //     if(data.spotterAuth) {
    //         var headers = {
    //             'Authorization': `Bearer ${data.spotterAuth}`, 
    //             'Content-Type': 'application/json'
    //         }
    //     }
    //     const response = await axios.post(API_URL + 'getUserData', data, { headers: headers })
    //         .then(resp => {
    //             cb(resp.data)
    //         })
    //         .catch(err => {
    //             errorCB(err)
    //         })
    //     return response;
    // },
    async refreshApiKey(data, cb, errorCB) {
        const response = await axios.post(API_URL + 'refreshApiKey', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
        return response;
    },
    async getClientChatUsers(data, cb, errorCB) {
        console.log('getClientUsers data ', data)
        if(data.spotterAuth) {
            var headers = {
                'Authorization': `Bearer ${data.spotterAuth}`, 
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post(API_URL + 'getChatClient/users/data', data,  { headers: headers })
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
        return response;
    },
    getAddSpotCategories(data, cb, errorCB) {
        axios.post(API_URL + 'getAddSpotCategories', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    addSpot(data, cb, errorCB) {
        axios
            .post(API_URL + 'addSpot', data, { headers: { "Content-Type": "multipart/form-data" }})
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    importSpots(data, cb, errorCB) {
        axios
            .post(API_URL + 'importSpots', data, { headers: { "Content-Type": "multipart/form-data" }})
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    testImportSpots(data, cb, errorCB) {
        axios
            .post(API_URL + 'testImportSpots', data, { headers: { "Content-Type": "multipart/form-data" }})
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    uploadImportMedia(data, cb, errorCB) {
        axios
            .post(API_URL + 'uploadImportMedia', data, { headers: { "Content-Type": "multipart/form-data" }})
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    submitImportMedia(data, cb, errorCB) {
        axios
            .post(API_URL + 'submitImportMedia', data, { headers: { "Content-Type": "multipart/form-data" }})
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    importImagesFile(data, cb, errorCB) {
        axios
            .post(API_URL + 'importImagesFile', data, { headers: { "Content-Type": "multipart/form-data" }})
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    exportQuestions(data, cb, errorCB) {
        axios({
            url: API_URL + `questions/export?client_id=${data.client_id}&category_id=${data.category_id}`,
            method: 'GET',
            responseType: 'blob',
        }).then(resp => {
                cb(resp.data)
            }).catch(err => {
                errorCB(err.response)
            })
    },
    getReportFilters(data, cb, errorCB) {
        axios.post(API_URL + 'getReportFilters', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    getReportsData(data, cb, errorCB) {
        axios.post(API_URL + 'getReportsData', data)
        .then(resp => {
            cb(resp.data)
        })
        .catch(err => {
            errorCB(err)
        })
    },
    downloadReportData(data, cb, errorCB) {
        const params = new URLSearchParams(data).toString();
        console.log('params', params);
        axios({
            url: API_URL + `downloadReportData?${params}`,
            method: 'GET',
            responseType: 'blob',
        }).then(resp => {
            cb(resp.data)
        })
        .catch(err => {
            errorCB(err)
        })
    },
    downloadImagesUploadData(data, cb, errorCB) {
        const params = new URLSearchParams(data).toString();
        axios({
            url: API_URL + `downloadImagesUploadData?${params}`,
            method: 'GET',
            responseType: 'blob',
        }).then(resp => {
            cb(resp.data)
        })
        .catch(err => {
            errorCB(err)
        })
    },
    restoreSpotter(data, cb, errorCB) {
        axios
            .post(API_URL + 'spotter/restore/' + data, '')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    permanentDeleteSpotter(data, cb, errorCB) {
        axios
            .post(API_URL + 'spotter/permanentDelete/'+ data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    // addStream(data, cb, errorCB) {
    //     axios.post(API_URL + 'chat/addStream', data)
    //         .then(resp => {
    //             cb(resp.data)
    //         })
    //         .catch(err => {
    //             errorCB(err)
    //         })
    // },
    updateToken(data, cb, errorCB) {
        axios.post(API_URL + 'updateToken', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    getPPDQuestions(param, cb, errorCB) {
        axios
            .post(API_URL + 'getPPDQuestions', param)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    addEditPPDQuestion(data, cb, errorCB) {
        axios
            .post(API_URL + 'addUpdatePPDQuestion', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    editPpdQuestion(id, cb, errorCB) {
        axios
            .get(API_URL + 'ppdQuestions/edit/' + id)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            })
    },
    deletePpdQuestion(data, cb, errorCB) {
        axios
            .delete(API_URL + 'ppdQuestions/delete/' + data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    deletePpdSubQuestion(data, cb, errorCB) {
        axios
            .post(API_URL + 'ppdSubQuestions/delete', data)
            .then(resp => {
                cb(resp.data) 
            })
            .catch(err => {
                errorCB(err.response.data)
            })
    },
    
    updateCategoryStatus(params, cb, errorCB) {
        axios
        .post(API_URL + 'updateCategoryStatus', params)
        .then(resp => {
            cb(resp.data)
        })
        .catch(err => {
            errorCB(err.response)
        })
    },
    updateSpotterCategoryStatus(params, cb, errorCB) {
        axios
        .post(API_URL + 'updateSpotterCategoryStatus', params)
        .then(resp => {
            cb(resp.data)
        })
        .catch(err => {
            errorCB(err.response)
        })
    },
    updateLocationStatus(params, cb, errorCB) {
        axios
        .post(API_URL + 'updateLocationStatus', params)
        .then(resp => {
            cb(resp.data)
        })
        .catch(err => {
            errorCB(err.response)
        })
    },
    updateFixLocationStatus(params, cb, errorCB) {
        axios
        .post(API_URL + 'updateFixLocationStatus', params)
        .then(resp => {
            cb(resp.data)
        })
        .catch(err => {
            errorCB(err.response)
        })
    },
    updateSpotTypeStatus(params, cb, errorCB) {
        axios
        .post(API_URL + 'updateSpotTypeStatus', params)
        .then(resp => {
            cb(resp.data)
        })
        .catch(err => {
            errorCB(err.response)
        })
    },
     getFiltersData(data, cb, errorCB) {
        axios.post(API_URL + 'getFiltersData', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    getQuestionAnswerCounts(data, cb, errorCB) {
        axios.post(API_URL + 'getQuestionAnswerCounts', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
    getSpotsByAdminFilters(data, cb, errorCB) {
        axios.post(API_URL + 'getSpotsByAdminFilters', data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err)
            })
    },
   
    getLatAndLongWeatherDetails(data,cb, errorCB) {
        axios.post(API_URL + 'getLatAndLongWeatherDetails',data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            }
        )
    },
    getWeatherLocations(data,cb, errorCB) {
        axios.post(API_URL + 'getWeatherLocations',data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            }
        )
    },
    getWeatherDetails(data,cb, errorCB) {
        axios.post(API_URL + 'getWeatherDetails',data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            }
        )
    },
    getGlobalSpotsWeather(data,cb, errorCB) {
        axios.post(API_URL + 'getGlobalSpotsWeather',data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            }
        )
    },
    getMarineSpotsWeather(data,cb, errorCB) {
        axios.post(API_URL + 'getMarineSpotsWeather',data)
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            }
        )
    },
    
    getVersions(cb, errorCB) {
        axios.get(API_URL + 'getVersions')
            .then(resp => {
                cb(resp.data)
            })
            .catch(err => {
                errorCB(err.response)
            }
        )
    },
}

export default API
