import {createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";
 import reducer from "../reducer/productReducer"
const AppContext = createContext();

const API="https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{},
};

const AppProvider = ({children}) =>{   //here children is App.jsx component and AppProvider is called in index.js file      **(a - context api)
    const[state,dispatch] = useReducer(reducer,initialState);
 
 

    useEffect(()=>{                  
        getProducts(API);
    },[]);
 
       const getProducts = async(url)=>{
        dispatch({type:"SET_LOADING"});          //dispatch fuction call action method present inside reducer
        try{
        const res =await axios.get(url);                       
        // console.log(res);
        const products = await res.data;                         //res me andhar jo main api ka data h h usko products me le..
        // console.log(products);
        dispatch({type:"SET_API_DATA",payload:products});
       }catch(error){
        dispatch({type:"API_ERROR"});
       }
    };
  console.log(initialState.featureProducts);

//2nd time API call  
    const getSingleProducts = async (url) =>{
        dispatch({type:"SET_Single_LOADING"}); 
        try{
            const res=await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});
        }catch(error){
            dispatch({type:"SET_SINGLE_ERROR"})
        }
    }


    return <AppContext.Provider value={{...state , getSingleProducts}}>{children}</AppContext.Provider>    
};

const useProductContext = () =>{                         
    return useContext(AppContext);
} 

export {AppProvider , useProductContext};          