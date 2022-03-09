import axios from "axios";


const newsApi = axios.create({
    baseURL: "https://nc-news-blame.herokuapp.com/api",
})

export const selectArticles = (topic="")=>{
        return topic==="all" ? newsApi.get(`/articles`).then(({ data }) => {
            
           return data.articles;
        })
   :newsApi.get(`/articles?topic=${topic}`) 
        
        .then(({ data }) => {
       
            
           return data.articles;
        });
   
}

export const selectArticel = (id)=>{
  
  return newsApi.get(`articles/${id}`).then(({data})=>{
    return data.article
  })
}

export const selectComments = (id)=>{
  return newsApi.get(`articles/${id}/comments`).then(({data})=>{
    return data.comments
  })
}