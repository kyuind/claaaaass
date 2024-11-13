<template>
<div>
    <p >{{ num }}</p>
    <button @click="addCount">Add</button>
    <button @click="minus">취소</button>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
           num:0
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        addCount() {   
            this.num += 1
        },
        minus(){
            this.num -= 1

        }
    }
}

</script>