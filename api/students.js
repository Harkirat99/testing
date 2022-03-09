let mapper = require('../mappers/student')
let Student = require('../models/student')
const set = function (entity, model) {
    if (model.name) {
        entity.name = model.name
    }
    if (model.class) {
        entity.class = model.class
    }
    if (model.age) {
        entity.age = model.age
    }
}

exports.create = async (body) => {
    let entity = new Student({})
    set(entity, body)
    await entity.save()
    return mapper.toModel(entity)
}

exports.update = async (id, body) => {
    let entity = await Student.findById(id)
    set(entity, body)
    await entity.save()
    return mapper.toModel(entity)
}

exports.get = async (id) => {
    let entity = await Student.findById(id)
    return mapper.toModel(entity)
}

exports.search = async (query) => {
    let entities = await Student.find(query)
    return mapper.toSearchModel(entities)
}

exports.delete = async (id) => {
    let entity = await Student.findByIdAndDelete(id)
    if (entity) {
        return 'Deleted Successfully'
    } else {
        return 'Unable to Deleted'
    }

}