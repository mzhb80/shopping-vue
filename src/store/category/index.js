import { createStore } from "vuex";

export default createStore({
    state : {
        categories : [
            {
                catId : 0 ,
                catName : 'mens' ,
                products : []
            } ,
            {
                catId : 1 ,
                catName : 'womans' ,
                products : []
            }
        ]

    } ,
    mutations : {
        
    } ,
    actions : {} ,
    getters : {
        getCategoriesSize(state , getters){
            return state.categories.length
        }
    }
})