const express = require('express')

const router = express.Router()

const Hero = require('../models/hero')

router.get("/hero", (req, res) => {
  Hero.find({})
    .then(heros => {
      res.json(heros)
    })
    .catch(err => {
      console.log(2)
      res.json(err)
    })
})

// 通过ObjectId查询单个英雄信息路由
router.get("/hero/:id", (req, res) => {
  Hero.findById(req.params.id)
    .then(hero => {
      res.json(hero);
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports = router