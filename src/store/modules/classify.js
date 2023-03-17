// import types from '../mutation-types.js';

export default {
    state: {
        classify: [{
                id: 0,
                title: "全部"
            },
            {
                id: 1,
                title: "资源类"
            },
            {
                id: 2,
                title: "开发类"
            },
            {
                id: 3,
                title: "文本类"
            },
            {
                id: 4,
                title: "图像类"
            },
            {
                id: 5,
                title: "代码类"
            },
            {
                id: 6,
                title: "运维类"
            },
            {
                id: 7,
                title: "查询类"
            }
        ],
    },
    getters: {
        classify(state) {
            return state.classify
        }
    }

}