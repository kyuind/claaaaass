export default{ 
    setup(){},
    created(){
        console.log('mixin의 created')
        getCustomers()
    },
    mounted(){
        console.log('mixin의 mounted')
    },
    unmounted(){},
    methods:{
        $convertDateFormat(date, format){ //Mixin 사용시 앞에 $ 붙이기
            let year =''
            let month = ''
            let day = ''
            '20241119'
            if (typeof date ==='string' && date.length === 8){
                year = date.substring(0,4)
                month = date.substring(4,6)
                day = date.substring(6,8)

            } else if (typeof date === 'object'){
                year = date.getFullYear()
                month = (date.getMonth() +1).toString().padtart(2.0)
                day = (date.getDay() +1).toString().padtart(2.0)
            }
            return format.replace('YYYY', year).replace('MM', month).replace('DD',day)
        },

    }
}