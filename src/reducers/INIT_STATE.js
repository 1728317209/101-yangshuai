
export const init_state = {
    Students_Info: {},
    currentLessonIds: [],
    historyLessonIds: [],
    lessonEntities: {
        teachers: {},
        classes: {},
        entities: {}
    },
    SatisfiledLessonTimes: [],
    satisfiledEntities: {
        teachers: {},
        classes: {},
        SatisfiledInfo: {}
    }
}

export const init_profile_state = {
    StudentsEntities: {},
    StudentsMids: [],
    SelectedMids: []
}

export const init_class_state = {
    basic_info: {},
    real_teacher: {},
    virtual_teacher: {},
    coursesList: {
        courseEntities: {},
        courseTimes: []
    }
}


// export const init_state = {
//     Students_Info: {},
//     currentLessonIds: [],
//     historyLessonIds: [],
//     // lessonEntities: {},
//     lessonEntities: {
//         teachers: {},
//         classes: {},
//         entities: {}
//     },
//     SatisfiledLessonTimes: [],
//     entities: {
//         teachers: {},
//         classes: {},
//         SatisfiledInfo: {}
//     }
// }