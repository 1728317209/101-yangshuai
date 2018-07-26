import icon from '../resource/icon_Good_B-2.png';

export const init_state = {
    messages: [
        {
            icon: icon,
            title: '小年糕',
            descript: 'hello 小年糕',
            time: '7-18 11:14',
            isTop: false
        },
        {
            icon: icon,
            title: '小板凳',
            descript: 'hello 小板凳',
            time: '7-18 11:15',
            isTop: false
        },
        {
            icon: icon,
            title: '小豆包',
            descript: 'hi 小豆包',
            time: '7-17 10:00',
            isTop: false
        }
    ],
    isDialogActive: 0,// Dialog的显示状态，有0、1、2三种
    isMulSelect: false,//是否多选
    idx: null,//单选删除的 index
    indexs: []//多选删除的 indexs
}
