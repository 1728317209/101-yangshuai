import { schema } from 'normalizr';


const StudentInfoSchema = new schema.Entity('Students', {}, { idAttribute: 'mid' });
export const StudentsInfoSchema = new schema.Array(StudentInfoSchema);

const classes = new schema.Entity('classes', {}, {idAttribute: 'id'});
const teacher = new schema.Entity('teacher', {}, {idAttribute: 'id'});

const lessonSchema = new schema.Entity('lesson', {
    classInfo: classes,
    teacherInfo: teacher
}, { 
    idAttribute: 'id' 
});
export const lessonListSchema = new schema.Array(lessonSchema);


const SatisfiledInfo = new schema.Entity('SatisfiledInfo', {
    class_info: classes,
    teacher_info: teacher
},{
    idAttribute: 'time'
})
export const SatisfiledInfoSchema = new schema.Array(SatisfiledInfo);

const courses = new schema.Entity('courses', {}, {idAttribute: 'time'});
export const classInfoSchema = new schema.Array(courses);