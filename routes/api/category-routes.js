const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  try{
    const allCategories = await Category.findAll({
      include: [{model: Product}]
    })
    if(!allCategories){
      res.status(404).json({message: 'No catergories'});
    }
    res.status(200).json(allCategories);
  } catch(err){
    res.status(400).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  try{
    const userData = await Category.findByPk(req.params.id);
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

  } catch(err){
    res.status(400).json(err);
  }
  // create a new category
});

router.put('/:id', async(req, res) => {
  try{


  } catch(err){
    res.status(400).json(err);
  }
  // update a category by its `id` value
});

router.delete('/:id', async(req, res) => {
  try{

  } catch(err){
    res.status(400).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
