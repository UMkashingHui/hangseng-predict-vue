//request为我封装的axios的js文件
import request from './request'

export const predict = (data) => {
    return request({
        method:'post',
        url:'predict',
        data
    })
}