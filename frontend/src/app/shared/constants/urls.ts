// '/apis'

const BASE_URL = 'http://localhost:5000';

export const GET_USER_URL = BASE_URL+'/api/users/';

export const COURSES_URL = BASE_URL+'/api/courses';
export const COURSES_TAGS_URL = BASE_URL+'/api/courses/tags';
export const COURSES_BY_SEARCH_URL = BASE_URL+'/api/courses/search/';
export const COURSES_BY_TAG_URL = BASE_URL+'/api/courses/tags/';
export const COURSES_BY_ID_URL = BASE_URL+'/api/courses/';
export const ENROLL_COURSE_URL = BASE_URL+'/api/users/enroll';
export const UNENROLL_COURSE_URL = BASE_URL+'/api/users/unenroll/';
export const COMPLETE_COURSE_URL = BASE_URL+'/api/users/complete/';
export const ENROLLED_COURSES_URL = BASE_URL+'/api/users/enrolled/';
export const COMPLETED_COURSES_URL = BASE_URL+'/api/users/completed/';

export const GET_COURSE_URL = BASE_URL+'api/courses/getcourse/';
export const ADD_COURSE_URL = BASE_URL+'/api/admin/addcourse';
export const EDIT_COURSE_URL = BASE_URL+'/api/admin/edit/';
export const REMOVE_COURSE_URL = BASE_URL+'/api/admin/remove/';

export const USER_LOGIN_URL = BASE_URL+'/api/users/login';
export const USER_REGISTER_URL = BASE_URL+ '/api/users/register';