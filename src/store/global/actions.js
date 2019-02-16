import actionTypes from '../actionTypes'

const { SET_CATE_SEARCH_RESULT } = actionTypes

export const setCateSearchResult = cateResult => {
  return {
    type: SET_CATE_SEARCH_RESULT,
    data: cateResult
  }
}
