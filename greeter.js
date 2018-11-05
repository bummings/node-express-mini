const greeter = (req, res) => {
  const person = req.params.person;

  res.json({ sup: person });
};

module.exports = greeter;
