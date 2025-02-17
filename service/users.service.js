import fs from 'fs'
import path from 'path'

let getUsers = () => {
    let datas = fs.readFileSync(path.join(process.cwd(), "database", 'users.json'))
    datas = datas ? JSON.parse(datas) : []

    return datas
}

let adData = function(data){
    let datas = getUsers()
    
    data.userId = datas ? datas[datas.length - 1].userId + 1 : 1
    datas.push(data)
    fs.writeFileSync(path.join(process.cwd(), "database", 'users.json'), JSON.stringify(datas, null, 4), 'utf-8')
}

let writeData = (datas) => {
    fs.writeFileSync(path.join(process.cwd(), "database", 'users.json'), JSON.stringify(datas, null, 4), 'utf-8')
}

export default {
    getUsers,
    adData,
    writeData,
}