
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
    isShowView: 0,//0、1、2
    currentEmployee: [],
    selectedEmployee: [],
    DepartmentIds: [100],
    DepartmentEntities: {
        departments: {
            100: {
                id: 100,
                name: 'AllDepartment',
                children: [101, 102, 103],
                employee: [1001]
            },
            101: {
                id: 101,
                name: 'GeneralManage',
                children: [104, 105, 106],
                employee: [1002]
            },
            102: {
                id: 102,
                name: 'Finance',
                children: [107, 108],
                employee: [1003]
            },
            103: {
                id: 103,
                name: 'Develop',
                children: [109],
                employee: [1004]
            },
            104: {
                id: 104,
                name: 'GroupA',
                children: [],
                employee: [1002, 1005, 1006]
            },
            105: {
                id: 105,
                name: 'GroupB',
                children: [],
                employee: [1002, 1007]
            },
            106: {
                id: 106,
                name: 'GroupC',
                children: [],
                employee: []
            },
            107: {
                id: 107,
                name: 'GroupD',
                children: [],
                employee: [1003, 1008, 1009]
            },
            108: {
                id: 108,
                name: 'GroupE',
                children: [],
                employee: [1003, 1010]
            },
            109: {
                id: 109,
                name: 'GroupF',
                children: [],
                employee: [1004, 1011, 1012]
            },

        },
        AllEmployee: {
            1001: {name: '小A', id: 1001, isSelected: false, isToDel: false},
            1002: {name: '小B', id: 1002, isSelected: false, isToDel: false},
            1003: {name: '小C', id: 1003, isSelected: false, isToDel: false},
            1004: {name: '小D', id: 1004, isSelected: false, isToDel: false},
            1005: {name: '小E', id: 1005, isSelected: false, isToDel: false},
            1006: {name: '小F', id: 1006, isSelected: false, isToDel: false},
            1007: {name: '小G', id: 1007, isSelected: false, isToDel: false},
            1008: {name: '小H', id: 1008, isSelected: false, isToDel: false},
            1009: {name: '小I', id: 1009, isSelected: false, isToDel: false},
            1010: {name: '小J', id: 1010, isSelected: false, isToDel: false},
            1011: {name: '小K', id: 1011, isSelected: false, isToDel: false},
            1012: {name: '小L', id: 1012, isSelected: false, isToDel: false}
        }
    }

}