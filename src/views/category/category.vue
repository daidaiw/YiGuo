<template>
  <div>
      <div class="header">
          <form action="" method="post">
          <div class='left'>
               <i class='fa fa-search'></i>
              <input type="text" placeholder="请输入商品名称">
          </div>
          <a>搜索</a>
          </form>
      </div>
      <div class="allCategory">
          <div class='left'>
            <router-link
              tag='div'
              to='/category/fruit'
              v-for='fruit in fruits'
              :key='fruit.CategoryId'
              :obj='fruit'
              :class="['tab',fruit.CategoryId === flag ? 'active' : '']"
              @click.native="change(fruit.CategoryId)"
            >
            {{fruit.CategoryName}}
            </router-link>
          </div>
          <div class='right'>
            <router-view></router-view>
          </div>
          
      </div>
  </div>
</template>
<script>
import categoryItem from './categoryItem'
export default {
  data() {
    return {
        fruits:[],
        flag:'ad7f227d-73c0-44a2-9edd-924006deb134'
    };
  },
  methods:{
      change(val){
          //  console.log(val)
           this.flag = val
      }
      
  },
  components:{
    categoryItem
  },
  created(){
     
      this.$http.get('/api/yg/category_list').then(res=>{
          console.log(res.data.data.object_list)
          this.fruits = res.data.data.object_list
      })
  }
  
    
  
};
</script>
<style lang='scss' scoped>
  .header{
    height:0.35rem;
    width:100%;
    border:1px solid green;
    background:hotpink;
    form{
      display:flex;
       height:0.35rem;
      flex-direction:row;
      justify-content: space-around;
      align-items:center;
     padding-right:0.1rem;
        .left{
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          align-items: center;
          padding:0 0.1rem;
           width:80%;
           height:0.25rem;
           background:#fff;
           border-radius:20px 20px;
           i{
             font-size:0.2rem;
           }
           input{
              font-size:0.2rem;
              border:0;
              width:90%;
              height:90%;
           }
        }
        a{
           font-size:20px;
           color:green;
        }
    }
  }
  .allCategory{
    height:100%;

    .left{
      width:0.7rem;
      height:4.9rem;
      border:1px solid red;
      display:flex;
      flex-direction:column;
      justify-content:space-around;
      align-items: center;
      font-size:0.14rem;
      .tab{
        height:0.4rem;
        width:100%;
        text-align:center;
        line-height:0.4rem;
      }
    }
  }
  .active{
          background:#ccc;          
        }
</style>