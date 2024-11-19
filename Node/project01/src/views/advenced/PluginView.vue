<template>
<div>
    <p>{{$t('hello', {name: userName})}}</p>
    <p>{{$t('welcome')}}</p>
    <p>{{$t('language')}}</p>

    <button class="btn btn-primary" @click="changeLanguage('ko')">한국어</button> &emsp;
    <button class="btn btn-primary" @click="changeLanguage('en')">영어</button> &emsp;
    <button class="btn btn-primary" @click="changeLanguage('es')">스페인어</button>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userName:'KYU'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        changeLanguage(lang){
            this.$i18n.locale = lang;
        }
    }
}

</script>