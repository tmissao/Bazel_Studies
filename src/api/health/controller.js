const _health = (req, res) => {
    return res.send(JSON.stringify(
      { 
        status: 'OK',
        message: `Hello ${process.env.name},\n Welcome to Bazel !` ,
        secret: `secret: ${process.env.secret}`
      }
    ));
  };
  
  const getController = () => ({
    health: (req, res, next) => _health(req, res, next)
  });
  
  
  module.exports.getController = getController;