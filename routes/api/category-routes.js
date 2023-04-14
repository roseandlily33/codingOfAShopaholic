const router = require('express').Router();
const { Category, Product } = require('../../models');

// /api/categories

//Finished
router.get('/', async(req, res) => {
  try{
    const allCategories = await Category.findAll()
    if(!allCategories){
      res.status(404).json({message: 'No catergories'});
    }
    res.status(200).json(allCategories);

  } catch(err){
    res.status(400).json(err);
  }
});
// Finished
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
    res.status(400).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  try{
    const newCategory = await Category.create(req.body);
    res.send(200).json(newCategory);

  } catch(err){
    res.status(400).json(err);
  }
  // create a new category
});

router.put('/:id', async(req, res) => {
  try{
  const categoryData = await Category.update({

  })


  } catch(err){
    res.status(400).json(err);
  }
  // update a category by its `id` value
});

router.delete('/:id', async(req, res) => {
  try{
    const deleteCatagory = await deleteCat.destory({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(deleteCatagory);

  } catch(err){
    res.status(400).json(err);
  }
});

module.exports = router;
