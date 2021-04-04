const express = require('express')
const app = express()
const router = express.Router();

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var { User } = require('./Select_Degree_Level')
var { Organization } = require('./Select_Degree_Level')

var{SU_Adm}=require('./Admission')
var{SU_SCholarships}=require('./Scholarships')
var {SU_ACCOT, SU_Bussiness_Admin, SU_Cardiology}=require('./Select_Undergraduate_Fields')
var {SU_AF}=require('./Select_Undergraduate_Fields')
var{SU_Acc_And_R_Management}=require('./Select_Undergraduate_Fields')
var{SU_Aerospace_Eng}=require('./Select_Undergraduate_Fields')
var{SU_Anesthesia}=require('./Select_Undergraduate_Fields')
var{Su_App_Chemistry}=require('./Select_Undergraduate_Fields')
var{SU_App_Physics}=require('./Select_Undergraduate_Fields')
var {SU_Archi}=require('./Select_Undergraduate_Fields')
var {SU_AI}=require('./Select_Undergraduate_Fields')
var{SU_Aviation_Management}=require('./Select_Undergraduate_Fields')
var {SU_Avionics_Engineering}=require('./Select_Undergraduate_Fields')
var {SU_Banking_And_Finance}=require("./Select_Undergraduate_Fields")
var {SU_BIO_Medical}=require("./Select_Undergraduate_Fields")
var {SU_BIO_Chem}=require("./Select_Undergraduate_Fields")
var {SU_BIO_Medical_Eng}=require("./Select_Undergraduate_Fields")
var {SU_BIO_Science}=require("./Select_Undergraduate_Fields")
var {SU_BIO_TECH}=require("./Select_Undergraduate_Fields")
var {SU_Bot}=require("./Select_Undergraduate_Fields")
var {SU_Bussiness_Info_Tech}=require("./Select_Undergraduate_Fields")
var {SU_Cardiology}=require("./Select_Undergraduate_Fields")
var {SU_Chemmical_Eng}=require("./Select_Undergraduate_Fields")
var {SU_Chemmical_Tech}=require("./Select_Undergraduate_Fields")
var {SU_Chemistry}=require("./Select_Undergraduate_Fields")
var {SU_Civil_Eng}=require("./Select_Undergraduate_Fields")
var {SU_Civil_Eng}=require("./Select_Undergraduate_Fields")
var {SU_Comp_Sci}=require("./Select_Undergraduate_Fields")
var {SU_SE}=require("./Select_Undergraduate_Fields")


require('./SelectionBUtton')
require('./Select_Graduate_Fields')
require('./Select_Postgraduate_Fields')
require('./Employee')
require('./Select')
require('./Degree_Level')
app.use(bodyParser.json())

const Employee = mongoose.model("employee")

const Select = mongoose.model("Select_Degree_Level")
const Select_Degree_Level = mongoose.model("Undergraduate_Fields")
const Select_Graduate_Fields = mongoose.model("Graduate_Fields")
const Select_Postgraduate_Fields=mongoose.model("Postgraduate_Fields")
const SelectButton =mongoose.model('AccData')


//const Degree_Level = mongoose.model("DegreeLevel")

const mongoUri = ("mongodb+srv://dbsherry:123@cluster0.zz8rm.mongodb.net/MyDataBase?retryWrites=true&w=majority")

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on("error", (err) => {
    console.log("error", err)
})

app.get('/Receive', (req, res) => {

    Employee.find({}).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })


})
app.get('/Select', (req, res) => {

    var query = Select.find({})

    Select.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })


})
app.get('/SelectButton', (req, res) => {

    var query = Select.find({})

    SelectButton.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })


})
app.get('/Select_Graduate_Fields', (req, res) => {

    

    Select_Graduate_Fields.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })


})
app.get('/Select_Postgraduate_Fields', (req, res) => {

    

    Select_Postgraduate_Fields.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })


})

app.get("/Select_Degree_Level", (req, res) => {



    /*User.aggregate([
        {

            $lookup:
            {
                from: "Undergraduate_Data",
                localField: "_id:3",
                foreignField: "SelectDegree",
                as: "SelectNew"
            }
        }, { $unwind: "$SelectNew" }
    ])
        .then(data => {

            res.send(data)
        }).catch(err => {
            console.log(err)

        })
*/







Select_Degree_Level.find().then(data => {

    res.send(data)
}).catch(err => {
    console.log(err)

})

    
})
//Undergraduate
app.get('/Select_Undergraduate_Fields', (req, res) => {

    

    SU_ACCOT.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_2', (req, res) => {

    

     
    SU_AF.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })


}),app.get('/Select_Undergraduate_Fields_3', (req, res) => {

    

     
    SU_Acc_And_R_Management.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })


})
app.get('/Select_Undergraduate_Fields_4', (req, res) => {

    

    SU_Aerospace_Eng.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_5', (req, res) => {

    

    SU_Anesthesia.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_6', (req, res) => {

    

    Su_App_Chemistry.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_7', (req, res) => {

    

    SU_App_Physics.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_8', (req, res) => {

    

    SU_Archi.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_9', (req, res) => {

    

    SU_AI.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_10', (req, res) => {

    

    SU_Aviation_Management.find().then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_12', (req, res) => {

    

    SU_Avionics_Engineering.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_13', (req, res) => {

    

    SU_Banking_And_Finance.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_14', (req, res) => {

    

    SU_BIO_Medical.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_15', (req, res) => {

    

    SU_BIO_Chem.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_16', (req, res) => {

    

    SU_BIO_Info.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})

app.get('/Select_Undergraduate_Fields_17', (req, res) => {

    

    SU_BIO_Medical_Eng.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_18', (req, res) => {

    

    SU_BIO_Science.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_19', (req, res) => {

    

    SU_BIO_TECH.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_20', (req, res) => {

    

    SU_Bot.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})

app.get('/Select_Undergraduate_Fields_21', (req, res) => {

    

    SU_Bussiness_Admin.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_22', (req, res) => {

    

    SU_Bussiness_Info_Tech.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_23', (req, res) => {

    

    SU_Cardiology.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_25', (req, res) => {

    

    SU_Chemmical_Tech.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_26', (req, res) => {

    

    SU_Chemistry.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_27', (req, res) => {

    

    SU_Civil_Eng.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Admission', (req, res) => {

    

    SU_Adm.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Scholarhsips', (req, res) => {

    

    SU_SCholarships.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_27', (req, res) => {

    

    SU_Comp_Sci.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_28', (req, res) => {

    

    SU_Comp_Sci.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})
app.get('/Select_Undergraduate_Fields_29', (req, res) => {

    

    SU_SE.find()
    .then(data => {

        res.send(data)
    }).catch(err => {
        console.log(err)

    })
     


})

app.post('/send-data', (req, res) => {
    const employee = new Employee({

        email: req.body.email,
        password: req.body.password,

    })
    employee.save()
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            console.log(err)
        })

})

app.post('/delete', (req, res) => {
    Employee.findByIdAndRemove(req.body.id)
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
})

app.post('/update', (req, res) => {
    Employee.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position
    }).then(data => {
        console.log(data)
        res.send(data)
    })
        .catch(err => {
            console.log(err)
        })
})
app.use("/", router);

app.listen(2000, () => {
    console.log("server running")
})
