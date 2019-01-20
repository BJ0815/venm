const mongoose = require('mongoose')

const heroSchema = mongoose.Schema({
    name: String,
    age: String,
    sex: String,
    address: String,
    dowhat: String,
    imgArr: [],
    favourite: String,
    explain: String
},{ collection: 'myHero' })
//这里mongoose.Schema最好要写上第二个参数，明确指定到数据库中的哪个表取数据，我这里写了myHero，目的就是为了以后操作数据要去myHero表中。

const Hero = module.exports = mongoose.model('hero', heroSchema)