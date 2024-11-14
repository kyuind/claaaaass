<template>
<div>
    <h1>Parent Component</h1>
    <div>
        <Child 
        str="start"
        :num= 10
        :bool= false
        :arr = [1,2,3]
        @change-num = "getData"
        />
    </div>
</div>
</template>


<script>
import ChildComponentVue from '@/components/flagment/ChildComponent.vue';

export default{ 
    name:'',
    components:{'Child' : ChildComponentVue},
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        getData(data){
            console.log("getData 함수 호출")
            console.log(data);
        }
    }
}

</script>