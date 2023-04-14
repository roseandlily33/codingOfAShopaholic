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
    res.status(500).json(err);
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
    res.status(500).json(err);
  }
});

// Issue where it cannot set headers after they are sent to the client:
router.post('/', async(req, res) => {
  try{
    const newCategory = await Category.create(req.body);
    res.status(200).json({message:'New Category Added'} + newCategory);

  } catch(err){
    res.status(500).json(err);
  }
  // create a new category
});

router.put('/:id', async(req, res) => {
  try{
  const categoryData = await Category.update({

  })


  } catch(err){
    res.status(500).json(err);
  }
  // update a category by its `id` value
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
