let mapper = require('../mappers/class')
let Class = require('../models/class')

const set = function (entity, model) {
    if (model.name) {
        entity.name = model.name
    }
}

exports.create = async (body) => {
    let entity = new Class({})
    set(entity, body)
    await entity.save()
    return mapper.toModel(entity)
}

exports.update = async (id, body) => {
    let entity = await Class.findById(id)
    set(entity, body)
    await entity.save()
    return mapper.toModel(entity)
}

exports.get = async (id) => {
    let entity = await Class.findById(id)
    return mapper.toModel(entity)
}

exports.search = async (query) => {
    let entities = await Class.find(query)
    return mapper.toSearchModel(entities)
}

exports.delete = async (id) => {
    let entity = await Class.findByIdAndDelete(id)
    if (entity) {
        return 'Deleted Successfully'
    } else {
        return 'Unable to Deleted'
    }

}