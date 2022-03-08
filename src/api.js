import axios from "axios";


const newsApi = axios.create({
    baseURL: "https://nc-news-blame.herokuapp.com/api",
})

export const selectArticles = (topic="")=>{
        return newsApi.get(`/articles?topic=${topic}`).then(({ data }) => {
            
           return data.articles;
        });
   
}