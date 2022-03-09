exports.toModel = function (entity) {
    let model = {
        id: entity.id,
        name: entity.name,
    }
    return model
}

exports.toSearchModel = function (entities) {
    let models = []
    for (const entity of entities) {
        models.push(this.toModel(entity))
    }
    return models
}