const router = require('express').Router()
const {ClassDetail} = require('../db/models')
module.exports = router

router.get('/free', async (req, res, next) => {
  try {
    const freeClass = await ClassDetail.findAll({where: {classId: 2}})
    res.json(freeClass)
  } catch (error) {
    console.error('Error fetching all free classes: ', error)
    next(error)
  }
})

router.get('/blitz', async (req, res, next) => {
  try {
    const blitzClass = await ClassDetail.findAll({where: {classId: 1}})
    res.json(blitzClass)
  } catch (error) {
    console.error('Error fetching all blitz classes: ', error)
    next(error)
  }
})

router.get('/junior', async (req, res, next) => {
  try {
    const jrClass = await ClassDetail.findAll({where: {classId: 4}})
    res.json(jrClass)
  } catch (error) {
    console.error('Error fetching all junior classes: ', error)
    next(error)
  }
})

router.get('/leaving', async (req, res, next) => {
  try {
    const leavCerts = await ClassDetail.findAll({where: {classId: 3}})
    res.json(leavCerts)
  } catch (error) {
    console.error('Error fetching all leaving cert classes: ', error)
    next(error)
  }
})
