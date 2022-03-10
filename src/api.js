import axios from "axios";


const newsApi = axios.create({
    baseURL: "https://nc-news-blame.herokuapp.com/api",
})

export const selectArticles = (topic) => {
  return  newsApi.get("/articles", {
 
      params: {
        topic: topic,
      },
      
    }).then(({ data}) => {
        return data.articles;
     });;
  };

 export const updateVote = (id,vote) =>{
    return newsApi.patch(`/articles/${id}`,{
            vote: vote
        
    }).then(({data})=>{
        
        return data.comment
    })
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
export const insertComment = (id,newComment) =>{
return newsApi.post(`articles/${id}/comments`,newComment).then(({data})=>{
    console.log(data)
    return data
})
}

