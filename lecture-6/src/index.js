import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

async function main() {
  mongoose.connect('mongodb://localhost/putzplan-test')

  const residentsSchema = new mongoose.Schema({
      name: {
          type: String,
          required: true,
      },
      surname: {
          type: String,
          required: true,
      },
      createdAt: {
          type: Date,
          default: Date.now,
      }
  })

  residentsSchema.statics.sortedByDate = function () {
      return this.find({}).sort([['createdAt', 'asc']])
  }

  const Resident = mongoose.model('residents', residentsSchema)

  const app = express()
  app.use(bodyParser.json())

  app.get('/api/residents', async (req, res, next) => {
      const residents = await Resident.sortedByDate()

      req.json(residents)
      next()
  })

  app.post('/api/resident', async (req, res, next) => {
      const resident = new Resident(req.body)

      let savedResident
      try {
          savedResident = await resident.save()
      } catch (err) {
          res.status(400)
          res.json({error: err.message})
          return
      }
      res.json(savedResident)
  })

  app.get('/api/resident/:residentId', async (req, res, next) => {
      const {residentId} = req.params
      let resident
      try {
          resident = await Resident.findOne({_id: residentId})
      } catch (err) {
          res.status(500)
          res.json({error: 'internal error'})
          console.error(err.message)
          return
      }

      if (!resident) {
          res.status(404)
          res.json({error: 'not found'})
          return
      }

      res.json(resident)
  })

  app.listen(3000)
}

main()
