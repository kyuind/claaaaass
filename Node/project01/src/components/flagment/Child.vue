<template>
<div>
    {{ deepChildData}}
</div>
</template>


<script>


export default{ 
    name:'',
    components:{},
    inject:['deepChildData'],
    props: {
       
    },
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>