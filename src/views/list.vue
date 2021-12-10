<template>
    <div class="list">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check="immediate"
            offset="30"	
        >
            <van-grid :border="false" :column-num="3">
                <van-grid-item v-for="(item,index) in brotherCategory" :key="index" @click="detail(item)">
                    <van-image :src="item.list_pic_url" />
                </van-grid-item>
            </van-grid>
        </van-list>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            brotherCategory:[],
            list: [],
            loading: false,
            finished: false,
            immediate:false,
            page:1,
        }
    },
    created(){
        this.axios.get('/api/goods/list',{params:{categoryId:this.$route.query.id,page:this.page,size:'20'}}).then((res)=>{
            this.brotherCategory = res.data.data.data
        })
    },
    methods:{
        onLoad() {
            this.immediate = true
            this.axios.get('/api/goods/list',{params:{categoryId:this.$route.query.id,page:this.page+1,size:'20'}}).then((res)=>{
                setTimeout(()=>{
                    this.brotherCategory = this.brotherCategory.concat(res.data.data.data)
                    this.finished = true;
                },1000)
            })
        },
    }
}
</script>

<style lang="scss" scoped>

</style>