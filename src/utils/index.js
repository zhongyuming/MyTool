// // // 引入 封装的api 

// import api from "./request.js"

// export default {
//     data() {
//         return {
//             kdata: []
//         }
//     },
//     mounted() {
//         api.get('/kdata').then(res => {
//             this.kdata = res.data
//         }).catch(err => {
//             console.log(err);
//         })
//     }
// }