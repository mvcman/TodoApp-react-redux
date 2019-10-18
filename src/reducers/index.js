import { combineReducers } from 'redux';
import todos from './todos';
import visibiliyFilter from './visibilityFilter';

export default combineReducers({
    todos,
    visibiliyFilter
})