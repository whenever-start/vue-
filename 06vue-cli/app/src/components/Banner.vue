<template>
  <div class="banner">
    <div class="banner_box" :style="{backgroundColor:banners[tabIndex].backgroundColor,height:height}">
            <!-- <ul class="banner-list" :style="{height:height}"> -->
                <transition-group class="banner-list"
                    :style="{height:height}"
                    tag="ul"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeIn">
                <li v-for="(item, index) in banners" 
                    :key="item.id"
                    v-show="tabIndex === index">
                    <router-link :to="item.link" class="bg" :style="{backgroundImage:`url(${item.url})`}"></router-link>
                </li>
                </transition-group>
            <!-- </ul> -->
        <div class="banner-slider">
            <ul class="banner-slider-list">
                <li v-for="(item,index) in banners" 
                    :key="item.id"
                    :class="{cur:tabIndex === index}"
                    @mouseover="sliderSelect(index)"
                    @mouseout="sliderOut">
                    <router-link :to="item.link">
                        <div class="title">{{item.title}}</div>
                        <div class="help_text">{{item.helpText}}</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',

  props:{
      banners:{
          type:Array,
          required:true,
      },
      height:{
          type:String,
          default:'400px',
      },
      interval:{
          type:Number,
          default:3000,
      },/* 轮播间隔 */ 
  },

  data () {
    return {
        tabIndex:0,
        timer:1, /* 定时器 */
    }
  },

  mounted() {
      this.autoPlay();
  },

  methods: {
      sliderSelect(index){
          clearInterval(this.timer);
          this.tabIndex = index;
      },
      sliderOut(){
          this.autoPlay();
      },
      autoPlay(){
        this.timer = setInterval(()=>{
            this.tabIndex++;
            this.tabIndex %= this.banners.length;
        },this.interval)
      },
  }
}
</script>

<style lang='less' scoped>
@import '../stylesheets/function';

// 自定义动画
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.banner{
    .banner_box{
        overflow: hidden;
        position: relative;
        .banner-list{
            position: relative;
            &>li{
                width: 100%;
                height: 100%;
                position: absolute;
                .bg{
                    display: block;
                    .bg(100%,100%);
                }
            }
        }
    }
    // text
    .banner-slider{
        @PADDING_TB:30px;/* slider 上下padding值 */
        @HEIGHT_ITEM:28px;/* slider li 的高度值 */
        @HEIGHT_ITEM_CUR:34px;/* slider li hover时 的高度值 */
        @PADDING_TB_CUR:10px;
        // slider 计算高度 (假设有10个item)
        @HEIGHT:2*@PADDING_TB + 10*@HEIGHT_ITEM + @HEIGHT_ITEM_CUR + 2*@PADDING_TB_CUR;
        position: absolute;
        right: 100px;
        top: 50%;
        margin-top: -@HEIGHT / 2;
        // top: 0;
        width: 240px;
        .banner-slider-list{
            .padding-tb(@PADDING_TB);
            background: linear-gradient(to bottom,rgba(255,255,255,0) 0,rgba(255,255,255,.8) 17%,rgba(255,255,255,.9) 50%,rgba(255,255,255,.8) 88%,rgba(255,255,255,0) 100%);
            &>li{
                &>a{
                    .padding-lr(15px);
                    .flex;
                    .title{
                        .font(14px,@content,@HEIGHT_ITEM);
                        flex-shrink: 0;
                        &:after{
                            content: ':';
                            margin-right: 5px;
                        }
                    }
                    .help_text{
                        .font(14px,@content,@HEIGHT_ITEM);
                        .single_line;
                    }
                }
                &.cur{
                    &>a{
                        display: block;
                        .padding-tb(10px);
                        background: rgba(255,255,255,.8);
                        .title{
                            .font(28px,@primary,@HEIGHT_ITEM_CUR);
                            &:after{
                                content: '';
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
