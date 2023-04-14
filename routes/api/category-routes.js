const router = require('express').Router();
const { Category, Product } = require('../../models');

// /api/categories

router.get('/', async(req, res) => {
  try{
    const allCategories = await Category.findAll()
    if(!allCategories){
      res.status(404).json({message: 'No catergories'});
    }
    res.status(200).json(allCategories);

  } catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  try{
    const userData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    if(!userData){
      res.status(404).json({message: 'Cannot find user'});
    }
    res.status(200).json(userData)
;
  } catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  try{
   const newCategory = await Category.create({
    category_name: req.body.category_name
   })
   res.status(200).json(newCategory);

  } catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', async(req, res) => {
  try{
  const categoryData = await Category.update(
    {
    category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      }
    });
  if(!categoryData){
    res.status(404).json({message: 'No category found'});
  }
  res.status(200).json(categoryData);
  } catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  try{
    const deleteCatagory = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    if(!deleteCatagory){
      res.status(404).json({message: 'Cannot find category to delete'});
    }
    res.status(200).json(deleteCatagory);

  } catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
