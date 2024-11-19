<template>
<div>
    <h1>Mixin</h1>
</div>
</template>


<script>
import Formatter from '@/components/mixins/fomatter'
import Axios from '@/components/mixins/axios'
export default{ 
    name:'',
    components:{},
    mixins: [Formatter, Axios],
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){
        console.log(Date('20241119'))
        console.log(this.$convertDateFormat('20241119','YYYY년MM월DD일'))
        console.log('created of views')
    },
    mounted(){
        console.log('mounted of views')
    },
    unmounted(){},
    methods:{
        convertDateFormat(date, format){
            let year =''
            let month = ''
            let day = ''
            '20241119'
            if (typeof date ==='string' && date.length === 8){
                year = date.substring(2,4)
                month = date.substring(4,6)
                day = date.substring(6,8)

            } else if (typeof date === 'object'){
                year = date.getFullYear()
                month = (date.getMonth() +1).toString().padtart(2.0)
                day = (date.getDay() +1).toString().padtart(2.0)
            }
            return format.replace('YYYY', year).replace('MM', month).replace('DD',day)
        },
        async getCustomers() {
            const customers = await this.$get('')
            console.log(customers)
        }
    }
}

</script>