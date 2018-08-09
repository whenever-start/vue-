<template>
  <Page>
    <Banner slot="cross" :banners="banners"/>
    <Banner slot="cross" height="500px" :banners="banners" style="margin-top:20px"/>
    <Banner slot="cross" height="600px" :banners="banners" style="margin-top:20px"/>
  </Page>
</template>

<script>
import Banner from '../components/Banner'

export default {
  name: 'IndexPage',

  components:{
    Banner,
  },

  data () {
    return {
      banners:[
        {
          id:1,
          url:'https://puui.qpic.cn/tv/0/29565096_1680580/0',
          title:'想眯成城',
          helpText:'他比贵族的八卦可以挖不过是个i一圈',
          backgroundColor:'#0d0903',
          link:'',
        },
        {
          id:2,
          url:'https://puui.qpic.cn/vupload/0/20180808_1533735605208.jpeg/0',
          title:'放开我北鼻3',
          helpText:'张碧晨清唱凉凉',
          backgroundColor:'#ceae7b',
          link:'',
        },
        {
          id:3,
          url:'https://puui.qpic.cn/vupload/0/20180808_1533718703387.jpeg/0',
          title:'中餐厅2',
          helpText:'王俊凯苏有朋爆笑嘎呜',
          backgroundColor:'#0b0c0e',
          link:'',
        },
        {
          id:4,
          url:'https://puui.qpic.cn/vupload/0/20180808_1533729012194.jpeg/0',
          title:'沙海',
          helpText:'吴磊秦昊大漠决斗神秘怪物',
          backgroundColor:'#89ae83',
          link:'',
        },
        {
          id:5,
          url:'https://puui.qpic.cn/vupload/0/20180806_1533629030622.jpeg/0',
          title:'明日之子',
          helpText:'九大品牌诞生',
          backgroundColor:'#50bcd6',
          link:'',
        },
        {
          id:6,
          url:'https://img1.gtimg.com/v/pics/hv1/236/154/2286/148686656.jpg',
          title:'要有光',
          helpText:'节目创造101背后的她们',
          backgroundColor:'#fedef3',
          link:'',
        },
        {
          id:7,
          url:'https://puui.qpic.cn/vupload/0/20180803_1533315708093.jpeg/0',
          title:'末日曙光',
          helpText:'明吧获救父子团聚',
          backgroundColor:'#0c091e',
          link:'',
        },
        {
          id:8,
          url:'https://puui.qpic.cn/tv/0/30032680_1680580/0',
          title:'西红柿首富',
          helpText:'沈腾从此无水逆',
          backgroundColor:'#543925',
          link:'',
        },
        {
          id:9,
          url:'https://puui.qpic.cn/vupload/0/20180803_1533315708093.jpeg/0',
          title:'换了之城',
          helpText:'任素汐王菲首秀',
          backgroundColor:'#0c091e',
          link:'',
        },
        {
          id:10,
          url:'https://puui.qpic.cn/vupload/0/20180807_1533624414058.jpeg/0',
          title:'扶摇',
          helpText:'惊险强植入',
          backgroundColor:'#010810',
          link:'',
        },
      ],
    }
  },

  methods: {}
}
</script>

<style lang='less' scoped>

</style>
