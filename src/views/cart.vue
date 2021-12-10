<template>
    <div class="cart">
        <van-row>
            <van-col span="6">
                <van-sidebar v-model="activeKey" @change="onChange" class="sidebar">
                    <van-sidebar-item v-for="(item,index) in categoryList" :key="index" :title="item.name" />
                </van-sidebar>
            </van-col>
            <van-col span="18">
                <van-grid :border="false" :column-num="3">
                    <van-grid-item v-for="(item,index) in currentCategory.subCategoryList" :key="index" @click="detail(item)">
                        <van-image :src="item.wap_banner_url" />
                    </van-grid-item>
                </van-grid>
            </van-col>
        </van-row>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeKey:0,
            currentCategory:[],
            categoryList:[]
        }
    },
    created(){
        this.axios.get('/api/catalog/index').then((res)=>{
            this.categoryList = res.data.data.categoryList
            this.currentCategory = res.data.data.currentCategory
            console.log(res)
        })
    },
    methods:{
        onChange(val){
            this.axios.get('/api/catalog/current',{params:{id:this.categoryList[val].id}}).then((res)=>{
                this.currentCategory = res.data.data.currentCategory
            })
        },
        detail(val){
            this.$router.push({path:"/list",query:{id:val.id}})
        }
    }
}
</script>

<style>
    
</style>