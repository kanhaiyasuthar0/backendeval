const getOne = (model) => {
  return async (req, res) => {
    const item = await model.findById(req.params.id).lean().exec();
    return res.send(item);
  };
};

const postOne = (model) => {
  return async (req, res) => {
    const item = await model.create(req.body);
    return res.send(item);
  };
};

module.exports = (model) => {
  return {
    get: getOne(model),

    post: postOne(model),
  };
};
