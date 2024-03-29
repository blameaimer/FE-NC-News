import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://host-nc-news.onrender.com/api",
});

export const selectArticles = (topic, sortby, order) => {
  return newsApi
    .get("/articles", {
      params: {
        topic: topic === "all" ? "" : topic,
        sort_by: sortby,
        order: order,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const updateVote = (id, vote) => {
  return newsApi
    .patch(`/articles/${id}`, {
      vote: vote,
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const updateCommentVote = (id, vote) => {
  return newsApi
    .patch(`/comments/${id}`, {
      vote: vote,
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const selectArticel = (id) => {
  return newsApi.get(`articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const selectComments = (id) => {
  return newsApi.get(`articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const insertComment = (id, newComment) => {
  return newsApi
    .post(`articles/${id}/comments`, newComment)
    .then(({ data }) => {
      return data;
    });
};
export const deleteComment = (id) => {
  return newsApi.delete(`comments/${id}`);
};
