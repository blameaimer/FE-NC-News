import axios from "axios";


const newsApi = axios.create({
    baseURL: "https://nc-news-blame.herokuapp.com/api",
})

export const selectArticles = (topic)=>{
    if (topic) {
        return newsApi.get(`/articles/?topic=${topic}`).then(({ data }) => {
            
           return data.articles;
        });
      } else {
        return newsApi.get("/articles").then(({data})=>{
        
            return data.articles
        })
      }
   
}