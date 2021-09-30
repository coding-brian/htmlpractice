<template>
  <div>
      <b-container class="bc">
          <a>股價資訊:</a>
          <b-table striped hover :items="items" :fields="fields"></b-table>
      </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          Date: '2021年9月28日', Price: '141.91', Open: '143.25', heigh: '144.75', low: '141.69', vol: '108.45M', change: '-2.38%'
        },
        {
          Date: '2021年9月27日', Price: '145.37', Open: '145.47', heigh: '145.96', low: '143.82', vol: '72.23M', change: '-1.05%'
        },
        {
          Date: '2021年9月24日', Price: '146.92', Open: '145.66', heigh: '147.47', low: '145.56', vol: '53.48M', change: '0.06%'
        },
        {
          Date: '2021年9月23日', Price: '146.83', Open: '146.65', heigh: '147.08', low: '145.64', vol: '64.51M', change: '0.67%'
        },
        {
          Date: '2021年9月22日', Price: '145.85', Open: '144.45', heigh: '146.43', low: '143.70', vol: '76.40M', change: '1.69%'
        },
        {
          Date: '2021年9月21日', Price: '143.43', Open: '143.93', heigh: '144.60', low: '142.78', vol: '75.17M', change: '0.34%'
        },
        {
          Date: '2021年9月20日', Price: '142.94', Open: '143.80', heigh: '144.84', low: '141.27', vol: '123.04M', change: '-2.14%'
        },
        {
          Date: '2021年9月17日', Price: '146.06', Open: '148.82', heigh: '148.82', low: '145.76', vol: '129.87M', change: '-1.83%'
        },
        {
          Date: '2021年9月16日', Price: '148.79', Open: '148.44', heigh: '148.97', low: '147.22', vol: '67.88M', change: '-0.16%'
        },
        {
          Date: '2021年9月15日', Price: '149.03', Open: '148.56', heigh: '149.44', low: '146.37', vol: '81.63M', change: '0.61%'
        },
        {
          Date: '2021年9月14日', Price: '148.12', Open: '150.35', heigh: '151.07', low: '146.91', vol: '108.41M', change: '-0.96%'
        }
      ]
    };
  },
  computed: {
    fields() {
      const result = [
        { key: 'Date', label: '日期' },
        { key: 'Price', label: '收盤' },
        { key: 'Open', label: '開盤' },
        { key: 'heigh', label: '高' },
        { key: 'low', label: '低' },
        { key: 'vol', label: '交易量' },
        { key: 'change', label: '漲跌幅' }
      ];

      return result;
    }
  }
};
</script>

<style  scoped>
.bc{
margin-top: 10px;
}
</style>
