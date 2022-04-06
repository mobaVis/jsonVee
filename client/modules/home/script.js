// import HttpHelper from "common/utils/axios_helper.js";
// import { reactive, onMounted, ref} from 'vue';
// import { ElTable, ElTableColumn } from "element-plus";
// import 'element-plus/es/components/table/style/css';
import liveView from '../../components/liveView.vue';


export default {
    data () {
        return {
            // todo
        };
    },
    components:{
        // ElTable,
        // ElTableColumn,
        liveView
    },
    setup() {

        const tableData = [
            {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            },
            {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
            },
            {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
            },
            {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
            },
        ];

        return {
            tableData
        };
    }
};