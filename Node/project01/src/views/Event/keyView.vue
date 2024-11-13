<template>
<div>
    <!--<input type="search" name="" id="" @keyup="checkEnter($event)" v-model="searchText"/>-->
    
    <input type="search" name="" id="" @keyup.enter="startSeach" v-model="searchText" />
    <button @click ="startSeach">Search</button>
    <button type="submit" @click.prevent ="startSeach">prevent</button>
   
    <hr>
     <div>
        <input type="radio" name="" id="" @click.prevent ="alertClick">
    <img src="다운로드.jpg" alt="" style="width:500px; height:auto;" @contextmenu.prevent=""/>
    </div>
    <br />
    <br />
    <h1>{{searchText2}}</h1>
    <hr>
    <div style='width: 200px; height: 200px;' @click="parenteClick" class='parent'>
        <div style='background-color: red;' @click.stop="childClick" class='child'></div>
    </div>
</div>
</template>


<script> 

export default{ 
    name:'',
    components:{},
    data(){
        return{
            searchText:'',
            searchText2:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        startSeach(){
          this.searchText2 = this.searchText
        },
        preventClick(){
            console.log('클릭금지')
        },
         alertClick(){
            alert('클릭금지')
        },
        checkEnter(event){
            if (event.keyCode === 13){
                this.startSeach()
            }
        },
        parenteClick(){
            console.log('부모태그의 이벤트 발생')
        },
        childClick(){
            console.log('자식태그의 이밴트 발생')
        }
    }
}

</script>

<style scoped>
.parent {
    border: 1px solid blue; display: inline-block;
}
.child {
    width: 50px; height: 50px; margin: 20px;
}
</style>
