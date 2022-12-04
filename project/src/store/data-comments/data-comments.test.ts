import { dataComments } from './data-comments';
import { fetchCommentsListAction, commentPostAction} from '../api-actions/api-actions';
import {fakeReviewList, makeFakeComment} from '../../utils/mocks';

export const fakeComment = makeFakeComment();

describe('Reducer: dataComments', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataComments.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({ commentsList:[], loaders: {}});
  });

  it('should update LoaderName.CommentsLoad to "true" if fetchCommentsListAction pending', () => {
    const state = { commentsList:[], loaders: {}};
    expect(dataComments.reducer(state, { type: fetchCommentsListAction.pending.type }))
      .toEqual({commentsList:[], loaders: {'comments-load': true}});
  });

  it('should show offers and update LoaderName.CommentsLoad to "false" if fetchCommentsListAction fulfilled', () => {
    const state = {commentsList: [], loaders: {}};
    expect(dataComments.reducer(state, { type: fetchCommentsListAction.fulfilled.type, payload:fakeReviewList }))
      .toEqual({commentsList: fakeReviewList, loaders: {'comments-load': false}});
  });

  it('should show offers and update LoaderName.CommentsLoad to "false" if fetchCommentsListAction rejected', () => {
    const state = {commentsList: [], loaders: {}};
    expect(dataComments.reducer(state, { type: fetchCommentsListAction.rejected.type}))
      .toEqual({commentsList: [], loaders: {'comments-load': false}});
  });

  it('should update LoaderName.CommentPost to "true" if commentPostAction pending', () => {
    const state = { commentsList:[], loaders: {}};
    expect(dataComments.reducer(state, { type: commentPostAction.pending.type }))
      .toEqual({commentsList:[], loaders: {'comment-post': true}});
  });

  it('should show offers and update LoaderName.CommentPost to "false" if commentPostAction fulfilled', () => {
    const state = {commentsList: [], loaders: {}};
    expect(dataComments.reducer(state, { type: commentPostAction.fulfilled.type, payload:fakeComment }))
      .toEqual({commentsList: fakeComment, loaders: {'comment-post': false}});
  });

  it('should show offers and update LoaderName.CommentPost to "false" if commentPostAction rejected', () => {
    const state = {commentsList: [], loaders: {}};
    expect(dataComments.reducer(state, { type: commentPostAction.rejected.type}))
      .toEqual({commentsList: [], loaders: {'comment-post': false}});
  });

});
