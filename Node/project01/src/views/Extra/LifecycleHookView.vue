<template>
<div>
    <label for="">가장 선호하는 프로그래밍 언어는 ?</label>
    <select name="" id="">
        <option value=""  :key="lan.code" v-for="lan in language">
            {{lan.title}}
        </option>
    </select>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
            language:[]
        };
    },
    // **컴포지션 api호출
    setup(){},
    //옵션 api가 초기화 되기 전 , data(), computed()같은 옵션 API의 최기화
    beforecreated(){},
    // **data(),computed(),watch(), moethods 를 모두 초기화해서 사용준비
    created(){
        this.getLanguage()
    },
    // DOM 노드가 생성되기 전의 상태
    beforemounted(){},
     //**실제 DOM이 랜더링이 모두 끝난 상태
    mounted(){},
    //리랜더링(Data 변경) 직전에 수행되는 단계
    beforeUpdate(){},
    //리랜더링 된 후에 호출
    updated(){},
    // 현재 component에서 빠져나오기 직전
    beforeunmount(){},
    // **현재 component에서 빠져나온 직후
    unmounted(){},
    methods:{
        getLanguage(){
            this.language = [{code:'01', title:'자바스크립트'}]
        }
    }
}

</script>