import axios from './index'

class home {
    //查询养护服务列表
    static curingServiceGoods(options) {
        return axios.get('/nice-api-curing-service/v1/curingServiceGoods/all', {params:options})
    }

}

export default home;
