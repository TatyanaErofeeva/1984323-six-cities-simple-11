import { NameSpace, LoaderName } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCommentsListAction, commentPostAction } from '../api-actions/api-actions';
import { DataComments } from '../../types/state';

const initialState: DataComments = {
  commentsList: [],
  loaders: {},
};

export const dataComments = createSlice({
  name: NameSpace.DataComments,
  initialState,
  reducers:{},
  extraReducers (builder) {
    builder
      .addCase(fetchCommentsListAction.pending, (state) => {
        state.loaders[LoaderName.CommentsLoad] = true;
      })
      .addCase(fetchCommentsListAction.fulfilled, (state, action) => {
        state.commentsList = action.payload;
        state.loaders[LoaderName.CommentsLoad] = false;
      })
      .addCase(fetchCommentsListAction.rejected, (state) => {
        state.loaders[LoaderName.CommentsLoad] = false;
      })

      .addCase(commentPostAction.pending, (state) => {
        state.loaders[LoaderName.CommentPost] = true;

      })
      .addCase(commentPostAction.fulfilled, (state, action) => {
        state.commentsList = action.payload;
        state.loaders[LoaderName.CommentPost] = false;
      })
      .addCase(commentPostAction.rejected, (state) => {
        state.loaders[LoaderName.CommentPost] = false;
      });
  }
});

