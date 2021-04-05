import {createStore,applyMiddleware,combineReducers,compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import { authReducer} from './Reducer';
import{homeVideosReducer,relatedVideoReducer,SearchedVideosReducer,subscriptionsChannelReducer,channelVideosReducer} from './Video.Reducer'
 import {selectedVideoReducer} from './Video.Reducer'
 import {channelDetailsReducer} from './Channel.Reducer'
 import {CommentReducer} from './Comment.Reducers'
const rootReducers=combineReducers({
    auth:authReducer,
  homeVideos:homeVideosReducer,
  selectedVideo:selectedVideoReducer,
  channelDetails:channelDetailsReducer,
commentList:CommentReducer,
relatedVideos:relatedVideoReducer,
searchedVideos:SearchedVideosReducer,
subscriptionsChannel:subscriptionsChannelReducer,



})
const store = createStore(
     rootReducers,{},
    composeWithDevTools(applyMiddleware(thunk))
)
export default store