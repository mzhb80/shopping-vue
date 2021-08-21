import { createStore } from 'vuex'
import Cart from './cart/index'
import Categories from './category/index'

export default createStore({
  state: {
    products : [
      {
        id : 0 , 
        name : 'جوراب مردانه 1' ,
        price : 20000 ,
        category : 'mens'
      },
      {
        id : 1 , 
        name : 'جوراب مردانه 2' ,
        price : 40000 ,
        category : 'mens'
      },
      {
        id : 2 , 
        name : 'جوراب مردانه 3' ,
        price : 25000 ,
        category : 'mens'
      },
      {
        id : 3 , 
        name : 'جوراب مردانه 4' ,
        price : 21000 ,
        category : 'mens'
      },
      {
        id : 4 , 
        name : 'جوراب زنانه 1' ,
        price : 65000 ,
        category : 'womans'
      },
      {
        id : 5 , 
        name : 'جوراب زنانه 2' ,
        price : 45000 ,
        category : 'womans'
      },
      {
        id : 6 , 
        name : 'جوراب زنانه 1' ,
        price : 65000 ,
        category : 'womans'
      },
      {
        id : 7 , 
        name : 'جوراب زنانه 2' ,
        price : 45000 ,
        category : 'womans'
      },
      {
        id : 8 , 
        name : 'جوراب زنانه 1' ,
        price : 65000 ,
        category : 'womans'
      },
      {
        id : 9 , 
        name : 'جوراب زنانه 2' ,
        price : 45000 ,
        category : 'womans'
      },
      {
        id : 10 , 
        name : 'جوراب زنانه 1' ,
        price : 65000 ,
        category : 'womans'
      },
      {
        id : 11 , 
        name : 'جوراب زنانه 2' ,
        price : 45000 ,
        category : 'womans'
      },
    ]
  },
  mutations: {
    splitProducts(state ){
      for(let i in state.products){
        for(let j in Categories.state.categories){
          if(state.products[i].category === Categories.state.categories[j].catName){
            Categories.state.categories[j].products.push(state.products[i])
          }
        }
      }

      console.log(Categories.state);
    }
  },
  actions: {
    splitProducts({commit}){
      commit('splitProducts')
    }
  },
  modules: {
    Cart ,
    Categories
  }
})
