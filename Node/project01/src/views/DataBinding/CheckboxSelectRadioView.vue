<template>
<div>
    <div>
        <h1>My Favorite Teams</h1>
        <p>{{favoriteTeam}}</p>
        
    </div>
    <input type="checkbox" name="" id="" value="T1" v-model="favoriteTeam"/>
    <label for="T1">T1</label>
    <input type="checkbox" name="" id="" value="Gen.G" v-model="favoriteTeam"/>
    <label for="Gen.G">Gen.G</label>
    <input type="checkbox" name="" id="" value="BLG" v-model="favoriteTeam"/>
    <label for="BLG">BLG</label>
    <br/>
    <br/>
    <div>
        <h1>My Favorite Icecream</h1>
        <p>{{Icecream}}</p>
    </div>
    <select name="" id= "" v-model="Icecream">
        <option value="">없음</option>
        <option value="메로나">메로나</option>
        <option value="바밤바">바밤바</option>
        <option value="수박바">수박바</option>
        <option value="누가바">누가바</option>
        <option value="죠스바">죠스바</option>
    </select>
    <br/>
    <br/>
    <br/>
    <div>
        <h1>My Favorite Language</h1>
        <p>{{Language}}</p>
    </div>
    <div>
        <input type="radio" name="" id="" value="" v-model="Language">
        <label for="">없음</label>
    </div>
    <div>
        <input type="radio" name="" id="" value="Korean" v-model="Language">
        <label for="Ko">Korean</label>
    </div>
    <div>
        <input type="radio" name="" id="" value="Japanese" v-model="Language">
        <label for="Ja">Japanese</label>
    </div>
    <div>
        <input type="radio" name="" id="" value="English" v-model="Language">
        <label for="En">English</label>
    </div>
    <div>
        <input type="radio" name="" id="" value="Spanish" v-model="Language">
        <label for="Sp">Spanish</label>
    </div>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            favoriteTeam:["Gen.G"],
            Icecream:'',
            Language:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>
h2o co2