<template>
<div>
    <!--<button >조회</button> &emsp; 
    <button v-if="userRole === 'A' | userRole === 'S'">판매물품등록</button>&emsp;
    <button v-if="userRole ==='A'">삭제</button>&emsp;-->

    
    <div v-if="userRole=='C'">
        <button>조회</button>
    </div>&emsp;

    <div v-else-if="userRole=='S'">
        <button>조회</button>&emsp;
        <button>판매물품등록</button>&emsp;
    </div>

    <div v-else>
        <button>조회</button>&emsp;
        <button>판매물품등록</button>&emsp;
        <button>삭제</button>&emsp;
    </div>
<br/>
<!--
    <button v-if="userRole ==='A'">삭제</button>&emsp; 관리자에게 보임
    <button v-else-if="userRole === 'S'">판매물품등록</button>&emsp; 판매자,관리자에게 보임
    <button v-else>조회</button> &emsp; 모든 유저에게 보임-->
    
    <select name="" id="" v-model="userRole">
        <option value="A">Admin</option>
        <option value="S">Saller</option>
        <option value="C">Customer</option>
    </select>
    <hr/>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userRole:''
        };
    },
    setup(){}, 
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>