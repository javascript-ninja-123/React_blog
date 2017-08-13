import axios from 'axios';
import {FETCH_POST}  from './type';
import  {CREATE_POST} from './type';
import  {DELTE_POST} from './type';
import  {GET_POST} from './type';
const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = '?key=Sung1234'

export function fetchPost() {
  const postRequest = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POST,
    payload:postRequest
  }
}



export function createPost(values){
const sendRequest = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
return {
  type:CREATE_POST,
  payload:sendRequest
}
}

export function getPost(id){
const getRequest = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
return {
  type:GET_POST,
  payload:getRequest
}
}

export function deletePost(id){
const deletePost = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
return {
  type:DELTE_POST,
  payload: id
}
}
