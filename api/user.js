let User = require('../models/user')
let mapper = require('../mappers/user')
const set = function (entity, model) {
    if (model.name) {
        entity.name = model.name
    }
    if (model.email) {
        entity.email = model.email
    }
    if (model.phone) {
        entity.phone = model.phone
    }
    if (model.password) {
        entity.password = model.password
    }
}

exports.create = async (body) => {
    let entity = new User({})
    set(entity, body)
    await entity.save()
    return mapper.toModel(entity)
}

exports.login = async (body) => {
    let entity = await User.findOne({
        email: body.email,
        password: body.password
    })
    if (entity) {
        return mapper.toModel(entity)
    }
    else{
        throw new Error('No result found')
    }
}
