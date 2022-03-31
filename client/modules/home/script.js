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
        const virtualList = ref();
        const data = reactive({
            id: "5d42ac3d9c149c38248c8199"
        });
        const router = useRouter();
        const selectById = async () => {
            await HttpHelper.axiosGet("/detail/selectById",{id: data.id});
        };

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

        const toDetail = () => {
            router.push('/detail');
        };
        let items = ref(DataItems);
        const addItem = () => {
            DataItems.push({
                index: Math.random() * 1000 + 1,
                name: "Brad" + Math.random() * 1000 + 1,
                id: Date.now(),
                desc: "html5",
                size: 150,
            });
            console.log(DataItems);
            // items.value = DataItems; // 这样不行
            items.value = JSON.parse(JSON.stringify(DataItems));
        };
        const scrollFun = () => {
            virtualList.value.scrollToOffset(50);
        };
        return {
            data,
            items,
            selectById,
            toDetail,
            addItem,
            virtualList,
            scrollFun
        };
    }
};