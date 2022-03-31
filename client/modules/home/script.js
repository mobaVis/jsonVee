import HttpHelper from "common/utils/axios_helper.js";
import { reactive, onMounted, ref} from 'vue';
// import { useRouter } from 'vue-router';

const TOTAL_COUNT = 100;
const sizes = [60, 80, 100, 150, 180];

const genUniqueId = (prefix) => {
    return `${prefix}$${Math.random().toString(16).substr(9)}`;
};


const DataItems = [];
let count = TOTAL_COUNT;
while (count--) {
    const index = TOTAL_COUNT - count;
    DataItems.push({
        index,
        name: `${Math.random()}`,
        id: genUniqueId(index),
        size: sizes[Math.floor(Math.random() * 5)]
    });
}


export default {
    data () {
        return {
            total: TOTAL_COUNT.toLocaleString(),
            isShowView: true
        };
    },
    setup() {
        const virtualList = ref();
        const data = reactive({
            id: "5d42ac3d9c149c38248c8199"
        });
        const selectById = async () => {
            await HttpHelper.axiosGet("/detail/selectById",{id: data.id});
        };

        onMounted(() => {
            d3.select('body');
            selectById();
        });
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
            addItem
        };
    }
};