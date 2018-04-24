app.get('/find-facility-management-for-student/:studentId', (req, res, done) => {

    Students.find({_id: req.params[studentId]}, (err, students) => {
        // for each student
        Housing.find({_id: student.housingUnit}, (err, housingUnit) => {

            FacilityMangement.findOne({_id: housingUnit._id}, (err, management) => {
                res.send({managementCompoay: management._id})
                done()
            })
        })
    })
})

const somePromise = new Promise((resolve, reject) => {
    // done
    resolve()
})

somePromise.then()
somePromise.catch()
somePromise.finally()



app.get('/find-facility-management-for-student/:studentId', (req, res, done) => {

    Students.find({_id: req.params[studentId]}, (err, students) => {
        // for each student
        Housing.find({_id: student.housingUnit}, (err, housingUnit) => {

            FacilityMangement.findOne({_id: housingUnit._id}, (err, management) => {
                res.send({managementCompoay: management._id})
                done()
            })
        })
    })
})



app.get('/find-facility-management-for-student/:studentId', (req, res, done) => {

    Students.find({_id: req.params[studentId]})
    .then((student) => {
        return Housing.find({_id: student.housingUnit})
    })
    .then((housingUnit) => {
        return FacilityMangement.findOne({_id: housingUnit._id})
    })
    .then((mangementCompany) => {
        res.send({managementCompany: management._id})
        done()
    })
    .then(() => {
        // do some more
    })
    .catch((err) => {

    })

})

async function someFunc() {
    return 12
}

async function errorfullFunc() {
    throw 'error bla'
}

async function promiseF() {
    return new Promise(/*...*/)
}

someFunc().then(value => {
    console.log(value) // 12
})

errorfullFunc().catch(err => {
    console.log(err) // error bla
})

app.get('/find-facility-management-for-student/:studentId', async (req, res, next) => {
    try {
        const student = await Students.find({_id: req.params[studentId]})
        const housingUnit = await Housing.find({_id: student.housingUnit})
        const managementCompany = await FacilityMangement.findOne({_id: housingUnit._id})
        res.send({managementCompany: managementCompany._id})
        next()
    } catch (err) {
        // ...
    }
})
