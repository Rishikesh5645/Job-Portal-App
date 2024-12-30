export const testPostController = (req, res) => {
    const { name } = req.body;
    res.status(200).send(`Your Name Is ${name}`);
    console.log(res.body);
  };