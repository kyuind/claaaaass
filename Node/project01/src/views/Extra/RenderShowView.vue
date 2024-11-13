<template>
<div>
    <p>당신이 가장 좋아하는 프로선수는 누구입니까 ?</p>
    <input type="radio" name="" id="one" value='son' v-model="selectedPlayar">
    <label for="one">1. 손흥민</label>&emsp;

    <input type="radio" name="" id="two" value='hwang' v-model="selectedPlayar">
    <label for="two">2. 황희찬</label>&emsp;

    <input type="radio" name="" id="three" value='lee' v-model="selectedPlayar">
    <label for="three">3. 이정후</label>&emsp;

    <input type="radio" name="" id="four" value='ryu' v-model="selectedPlayar">
    <label for="four">4. 류현진</label>&emsp;

    <input type="radio" name="" id="five" value='other' v-model="selectedPlayar">
    <label for="five">5. 기타</label>&emsp;
    <!-- <input type="text" v-if="selectedPlayar == 'other'"> -->
    <input type="text" v-show="selectedPlayar == 'other'">
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            selectedPlayar:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>