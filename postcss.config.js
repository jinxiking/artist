module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 96,
        propList: ['*']
      }
    }
}
//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem