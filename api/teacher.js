let mapper = require('../mappers/teacher')
let Teacher = require('../models/teacher')

const set = function (entity, model) {
    if (model.name) {
        entity.name = model.name
    }
    if (model.className) {
        entity.className = model.className
    }
}

exports.create = async (body) => {
    let entity = new Teacher({})
    set(entity, body)
    await entity.save()
    return mapper.toModel(entity)
}

exports.update = async (id, body) => {
    let entity = await Teacher.findById(id)
    set(entity, body)
    await entity.save()
    return mapper.toModel(entity)
}

exports.get = async (id) => {
    let entity = await Teacher.findById(id)
    return mapper.toModel(entity)
}

exports.search = async (query) => {
    let entities = await Teacher.find(query)
    return mapper.toSearchModel(entities)
}

exports.delete = async (id) => {
    let entity = await Teacher.findByIdAndDelete(id)
    if (entity) {
        return 'Deleted Successfully'
    } else {
        return 'Unable to Deleted'
    }

}