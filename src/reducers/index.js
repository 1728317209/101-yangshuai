import { combineReducers } from 'redux';
import OpInfo from './OpInfo';
import ProfileInfo from './ProfileInfo';
import ClassInfo from './ClassInfo';
import HomeworkInfo from './HomeworkInfo';

export default combineReducers({
    OpInfo,
    ProfileInfo,
    ClassInfo,
    HomeworkInfo
});