const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// /api/tags
//Finished
router.get('/', async(req, res) => {
  try{
    const allTags = await Tag.findAll({
      include: [{model: Product, through: ProductTag}]
    });
    if(!allTags){
      res.status(404).json({message: 'No Tags'});
    }
    res.status(200).json(allTags);
  } catch(err){
    res.status(500).json(err);
  }
});

//
router.get('/:id', async(req, res) => {
  try{
    const tagId = await Tag.findByPk(req.params.id, {
      include: [{model: Product, through: ProductTag}]
    });
    if(!tagId){
      res.status(404).json({message: 'No product id found'});
    }
    res.send(200).json(tagId);

  } catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  try{
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);

  } catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  try{

  } catch(err){
    res.status(400).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async(req, res) => {
  try{
   

  } catch(err){
    res.status(400).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
