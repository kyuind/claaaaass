<template>
<div>
    <select class="form-select" aria-label="default select example" @change="diffChange" v-model="selectData">
        <option value="all">모두 보기</option>
        <option value="high">전일 상승</option>
        <option value="low">전일 하락</option>
    </select>
    <hr/>
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th v-if="selectData ==='all'">
                    <input type="checkbox" name="" id="">
                </th>
                <th v-if="selectData === 'high'">
                    <input type="radio" name="" id="">
                </th>
                <th :key="col" v-for="col in headers">{{col.title}}</th>
            </tr>
        </thead>
        <tbody>
            
            <tr v-for="(item, i) in items" :key="i">
                <th v-if="selectData ==='all'">
                    <input type="checkbox" name="" id="" @change="selectedCheck"  :value=item.exchange v-model="checkedItems" >
                </th>
                <th v-if="selectData ==='high'">
                    <input type="radio" name="" id="" @change="selectedCheck" :value=item.exchange v-model="checkedItems" >  
                </th>
                <th v-for="col in headers" :key="col.key">{{item[col.key]}}</th>
            </tr>
        </tbody>
    </table>


</div>
</template>


<script>


export default{ 
    name:'',
    components:{},
    props:{
        headers : {
            type : Array,
            default : function(){
                return []
            }
        },
        items : {
            type : Array,
            default : function() {
                return []
            }
        },
    },
    data(){
        return{
            selectData:'all',
            checkedItems:[],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        diffChange(){
            this.$emit("diff-change",this.selectData)
            this.checkedItems = []
        },
        selectedCheck(){
            this.$emit('change-item',this.checkedItems)
            
        }
    }
    
}

</script>