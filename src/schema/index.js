import { schema } from 'normalizr';

//Profile
const StudentInfoSchema = new schema.Entity('Students', {}, { idAttribute: 'mid' });
export const StudentsInfoSchema = new schema.Array(StudentInfoSchema);

//OP
const classes = new schema.Entity('classes', {}, {idAttribute: 'id'});
const teacher = new schema.Entity('teacher', {}, {idAttribute: 'id'});
    //Lessons
const lessonSchema = new schema.Entity('lesson', {
    classInfo: classes,
    teacherInfo: teacher
}, { 
    idAttribute: 'id' 
});
export const lessonListSchema = new schema.Array(lessonSchema);

    //Satisfiled
const SatisfiledInfo = new schema.Entity('SatisfiledInfo', {
    class_info: classes,
    teacher_info: teacher
},{
    idAttribute: 'time'
})
export const SatisfiledInfoSchema = new schema.Array(SatisfiledInfo);

//ClassDeatils
const courses = new schema.Entity('courses', {}, {idAttribute: 'time'});
export const classInfoSchema = new schema.Array(courses);

//HomeworkReview
const author = new schema.Entity('author', {}, {idAttribute: 'mid'});
const classInfo = new schema.Entity('classInfo', {}, {idAttribute: 'id'});
const teacherInfo = new schema.Entity('teacherInfo', {}, {idAttribute: 'id'});
const commentsItem = new schema.Entity("commentsItem", {}, {idAttribute: 'id'})
const comments = new schema.Array(commentsItem);
const HomeworkReviewInfo = new schema.Entity('HomeworkReviewInfo', {
    author: author,
    classInfo: classInfo,
    teacherInfo: teacherInfo,
    comments: comments
}, {idAttribute: 'id'});
export const HomeworkReviewInfoSchema = new schema.Array(HomeworkReviewInfo);