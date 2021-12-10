<template>
    <div class="detail">
        <van-checkbox v-model="all" @change="allClick">复选框</van-checkbox>
        <ul>
            <li v-for="(item,index) in data" :key="index">
                {{item.name}}
                <van-checkbox v-model="item.tick">复选框</van-checkbox>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:[],
            all:false,
        }   
    },
    created(){
        let data = [{name:'123'},{name:'123'},{name:'123'}]
        data.forEach(item=>{
            Object.assign(item,{tick:false})
        })
        this.data = data
        console.log(this.data)
    },
    methods:{
        allClick(val){
            console.log(val)
            this.data.forEach(item=>{
                item.tick = val
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>