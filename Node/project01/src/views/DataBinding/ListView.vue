<template>
<div>
    <table>
        <thead>
            <tr>
                <th>제품번호</th>
                <th>제품명</th>
                <th>제조회사</th>
                <th>가격</th>
                <th>수량</th>
                <th>합계</th>
            </tr>
           
        </thead>
        <tbody>
            <tr :key="noodle.id" v-for="noodle in noodleData">
                <th>{{ noodle.id }}</th>
                <th>{{ noodle.name }}</th>
                <th>{{ noodle.comp }}</th>
                <th>{{ noodle.price }}</th>
                <th><input type="text" v-model='noodle.qty'/></th>
                <th> ￦ {{ noodle.price * noodle.qty}}</th>
            </tr>
           
        </tbody>
    </table>
    <br/>
    <br/>
    <table>
        <thead>
             <tr>
                <th>번호</th>
                <th>이름</th>
                <th>키</th>
                <th>몸무게</th>
                <th>BMI</th>
            </tr>
        </thead>
        <tbody>
             <tr :key="ps.id" v-for="ps in psDate">
                <th>{{ps.id}}</th>
                <th>{{ps.name}}</th>
                <th><input type="text" v-model='ps.height'/></th>
                <th><input type="text" v-model='ps.widht'/></th>
                <th>{{(ps.height * ps.height)/ps.widht/10000}}</th>
            </tr>
        </tbody>
    </table>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            noodleData:[
                {
                    id:'1',
                    name:'너구리',
                    comp:'농심',
                    price: 18150,
                    qty:0,
                },
                 {
                    id:'2',
                    name:'진라면',
                    comp:'오뚜기',
                    price: 10600,
                    qty:0,
                },
                 {
                    id:'3',
                    name:'짜파게티',
                    comp:'농심',
                    price: 17820,
                    qty:0,
                },
                 {
                    id:'4',
                    name:'안성탕면',
                    comp:'농심',
                    price:13420,
                    qty:0,
                },
                 {
                    id:'5',
                    name:'열라면',
                    comp:'오뚜기',
                    price:20700,
                    qty:0,
                }
            ],
            psDate:[
                {
                    id:'1',
                    name:'김상혁',
                    height:0,
                    widht:0,      
                },
                {
                    id:'2',
                    name:'조국현',
                    height:0,
                    widht:0,      
                },
                {
                    id:'3',
                    name:'홍선민',
                    height:0,
                    widht:0,      
                },
                {
                    id:'4',
                    name:'김동빈',
                    height:0,
                    widht:0,      
                },
            ]

            
            
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>