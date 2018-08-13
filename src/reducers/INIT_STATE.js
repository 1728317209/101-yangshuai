
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

export const init_homework_state = {
    HomeworkIdx: {
        MyWillReviewHomeworkIds: [],
        MyReviewedHomeworkIds: [],
        AllWillReviewHomeworkIds: [],
        ALLReviewedHomeworkIds: [],
    },
    HomeworkEntities: {
        HomeworkReviewInfo: {},
        author: {},
        classInfo: {},
        commentsItem: {},
        teacherInfo: {}
    }
}

export const init_colPermission_state = {
    selectedEmployee: [],
    DepartmentIds: {
        AllDepartment: ['GeneralManage', 'Finance', 'Develop'],
        DevelopGroups: ['GroupA', 'GroupB', 'GroupC'],
        GeneralManageGroups: [],
        FinanceGroups: [],
    },
    DepartmentEntities: {
        GeneralManage: {
            name: 'GeneralManage',
            Groups: {}
        },
        Finance: {
            name: 'Finance',
            Groups: {}
        },
        Develop: {
            name: 'Develop',
            Groups: {
                GroupA: {name: 'GroupA', Employee: [1001, 1002, 1003, 1004]},
                GroupB: {name: 'GroupB', Employee: [1002, 1003, 1004, 1005]},
                GroupC: {name: 'GroupC', Employee: [1003, 1004, 1005, 1006]}
            }
        },
        AllEmployee: {
            1001: {name: '小A', id: 1001},
            1002: {name: '小B', id: 1002},
            1003: {name: '小C', id: 1003},
            1004: {name: '小D', id: 1004},
            1005: {name: '小E', id: 1005},
            1006: {name: '小F', id: 1006}
        }
    }

}

// 所有部门
//     总经办
//     财务部
//     研发部
//         开发一组
//         开发二组
//             personA
//             personB
//             personC
//         测试组