# table组件

1. props

    ```js
    column:{/* 列 / 表头 / thead th */
        type:Array,
        required:true,
    },
    data:{/* tbody td */
        type:Array,
    },
    /* column 选项 */
    {
        label:'姓名',
        key:'name'/* 对应 data 中的属性名 */
    }
    /* data 选项 */
    {
        id:1,
        name:'小明',/* 属性名对应 column 中的 key 值 */
        age:19,
        address:'北京市朝阳区芍药居'
    }
    ```
2. 目前只做了一个基本表格,其他样式,如"斑马线","表格宽度"等暂未做.