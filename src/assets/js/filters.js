export default {
    formatImgUrl(url, width, height,m_fill) {
        let surl = url;
        if (url) {
                url = url.replace('h_{height},w_{width}', "h_" + height + ",w_" + width + "");
                // url = url.replace(',jpg', ",webp");
                if(url != surl){
                    url +=',q_80';
                }
                
                
            if(m_fill){
                // console.log(m_fill)
                url = url.replace('m_lfit', "m_fill");
            }
        }
        // console.log(url)
        return url
    },
    formatNum(num){
      if(num >= 10000){
        return parseInt(num/10000*10)/10 + 'w'
      }else{
        return num
      }
      
    }
  }
  