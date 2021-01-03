/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function getUserCardsAsync(userId) {
  const response = await axios.get(
    `http://3.140.150.124:5000/api/mypage/getpost/${userId}`
  );
  if (response.data.getMyPost === false) throw new Error(response.data.error);
  return response.data;
}

export async function getUserLikesAsync(userId) {
  const response = await axios.get(
    `http://3.140.150.124:5000/api/mypage/getlikepost`
  );
  if (response.data.getLikePost === false)
    throw new Error('좋아요 게시물 조회 실패');
  return response.data;
}
