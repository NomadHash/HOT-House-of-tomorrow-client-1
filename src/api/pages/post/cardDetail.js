/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function postCommentAsync(comment) {
  const response = await axios.post('/api/comment/write', comment);
  if (response.data.writeComment === false)
    throw new Error(response.data.error);
  return response.data;
}

export async function deleteCommentAsync(comment) {
  const response = await axios.post('/api/comment/delete', comment);
  if (response.data.deleteComment === false)
    throw new Error(response.data.error);
  return response.data;
}

export async function likePostAsync(postId) {
  const response = await axios.post('/api/lobby/likepost', { postId });
  if (response.data.updateSuccess === false)
    throw new Error(response.data.updateSuccess);
  return response.data;
}

export async function deletePostAsync(postId) {
  const response = await axios.post('/api/post/delete', { postId });
  if (response.data.postDeleted === false)
    throw new Error(`postDeleted : ${response.data.postDeleted}`);
  return response.data.postDeleted;
}
