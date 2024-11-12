<template>
<div>
    <input type= "text" name="" id="" v-model="userId">
    <button @click="clickEvent" > 확인 </button>
    <button @click="changeDate" > 변경 </button>
    <button @click="returnDate" > 재변경 </button>
    <br/>
    <input type="text" v-model.number="num1"/> +
    <input tupe="text" v-model.number="num2"/> =
    <span>{{}}</span>
    <hr>
    <br/>
    <br/>
    <br/>
    <input type="text" v-model.number="num3"/> {{cal}}
    <input type="text" v-model.number="num4"/> =
    <input type="text" name=" id=" v-model="result">
    <br/>
    <br/>
     <select name="" id= "" v-model="cal">
        <option value="">연산</option>
        <option value='+'>더하기</option>
        <option value="-">빼기</option>
        <option value="/">나누기</option>
        <option value="*">곱하기</option>
    </select>

    <button @click="calculator(cal)">계산하기</button>

</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userId:'Kim',
            num1:0,
            num2:0,
            num3:0,
            num4:0,
            cal:'',
            result:0,
           
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        clickEvent(){
            console.log(this.userId)
        },
        changeDate(){
            this.userId = 'kyu'
        },
        returnDate(){
            this.userId = 'Kim'
        },
        calculator(operate){
            this.cal = operate;
            switch (operate) {
                case '+':
                    this.result = this.num3 + this.num4;
                    break;
                case '-':
                    this.result = this.num3 - this.num4;
                    break;
                case '*':
                    this.result = this.num3 * this.num4;
                    break;
                case '/':
                    this.result = this.num3 / this.num4;
                    break;                                        
                
            }
        }
    }
}

</script>