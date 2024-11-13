<!--<template>
<div>
    <select name="" id="" @change="startTrain" v-model="selectedCity">
        <option value="">도착지</option>
        <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList">{{city.cityName}}</option>
    </select>
    <select name="" id="" >
         <option value="">출발시간</option>
        <option value="" v-for="train in selectedList" :key="train.trainCode">{{train.time}}</option>
    </select>
</div>
</template>-->

<template>
<div>
    <select name="" id=""  v-model="selectedCity">
        <option value="">도착지</option>
        <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList">{{city.cityName}}</option>
    </select>
    <select name="" id="" >
         <option value="">출발시간</option>
        <option value="" v-for="train in this.trainList.filter((train) => train.cityCode == this.selectedCity)" 
:key="train.trainCode">{{train.time}}</option>
    </select>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            cityList:[
                {cityCode:'01',cityName:"부천시"},
                {cityCode:'02',cityName:"인천시"},
                {cityCode:'03',cityName:"울산시"},
            ],
            trainList:[
                {cityCode:'01',trainCode:'t01', time:'9:20 출발(부천)'},
                {cityCode:'01',trainCode:'t02', time:'11:20 출발(부천)'},
                {cityCode:'01',trainCode:'t03', time:'13:20 출발(부천)'},

                {cityCode:'02',trainCode:'t04', time:'10:40 출발(인천)'},
                {cityCode:'02',trainCode:'t05', time:'13:20 출발(인천)'},
                {cityCode:'02',trainCode:'t06', time:'16:00 출발(인천)'},

                {cityCode:'03',trainCode:'t07', time:'5:55 출발(울산)'},
                {cityCode:'03',trainCode:'t08', time:'7:45 출발(울산)'},
                {cityCode:'03',trainCode:'t09', time:'9:30 출발(울산)'},
            ],
            selectedCity : '',
            selectedList : []
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        startTrain(){
            this.selectedList = this.trainList.filter(
                (train) => train.cityCode == this.selectedCity

            )
        }
    }
}

</script>