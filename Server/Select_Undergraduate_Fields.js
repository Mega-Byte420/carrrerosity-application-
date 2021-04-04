const mongoose = require("mongoose");

const Acc_And_OT = new mongoose.Schema({

   
   _id:String,
   Details:String,
   Image:String 
   
  
},
{
    collection:'AcceleratedAndOT'
}
);


 const UN_ACC_F = new mongoose.Schema({

   _id:String,
   Details:String,
   Image:String 
   
    
   
 },
 {
    collection:'UN_Accounts_And_Finance'
 }
);
const UN_ACC_And_Risk_Management = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'(UN)_Actuarial_And_Risk Management'
}
);
 
const UN_Aerospace_Eng = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Aerospace_Engineering'
}
);
const UN_Anesthesia = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Anesthesia'
}
);
const UN_Applied_Chem = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Applied_Chemistry'
}
);
const UN_Applied_PHY = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Applied_Physics'
}
);
const UN_Architech = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Architechture'
}
);
const UN_AI = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Artificial_Intelligence'
}
);
const UN_Av_Management = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Aviation_Management'
}
);
const UN_Av_Eng = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Avionics_Engineering'
}
);
const Un_Banking_And_Finance = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'Un_Banking_And_Finance'
}
);
const UN_Bio_Med = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Bio_Medical'
}
);
const UN_Bio_Chem = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Bio_Chemistry'
}
);
const UN_Bio_Info = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Bio_Informatics'
}
);
const UN_BioMedical_Eng = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_BIOMedical_Engineering'
}
);
const UN_BioScience = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Biosciences'
}
);
const UN_BioTech = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Biosciences'
}
);
const UN_Botany = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Botany'
}
);
const UN_Bussiness_Admin = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Business_Administration'
}
);
const UN_Bussiness_Info_Technonlogy = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Bussiness_Info_Tech'
}
);
const UN_Cardiology = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Bussiness_Info_Tech'
}
);

const UN_Chemical_Eng = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Chemical_Engineering'
}
);
const UN_Chemical_Tech = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Chemical_Technology'
}
);
const UN_Chemistry = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Chemistry'
}
);

const UN_Civil_Eng = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Civil_Engineering'
}
);
const UN_Cs = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Computer_Science'
}
);
const UN_SE = new mongoose.Schema({

   _id:Object,
   University:String,
   Details:String,
   Image:String 
   
   
  
},
{
   collection:'UN_Software_Eng'
}
);

const ACCOT =  mongoose.model("AcceleratedAndOT", Acc_And_OT)
const AF = mongoose.model("UN_Accounts_And_Finance",UN_ACC_F)
const A_R_M = mongoose.model("(UN)_Actuarial_And_Risk Management",UN_ACC_And_Risk_Management)
const Aerospace_Eng = mongoose.model("UN_Aerospace_Engineering",UN_Aerospace_Eng)
const Anesthesia = mongoose.model("UN_Anesthesia",UN_Anesthesia)
const App_Chem = mongoose.model("UN_Applied_Chemistry",UN_Applied_Chem)
const Applied_Phy = mongoose.model("UN_Applied_Physics",UN_Applied_PHY)
const Architechture = mongoose.model("UN_Architechture",UN_Architech)
const Artificial_Inteligence = mongoose.model("UN_Artificial_Intelligence",UN_AI)
const Aviation_Management = mongoose.model("UN_Aviation_Management",UN_Av_Management)
const Avionics_Engineering = mongoose.model("UN_Avionics_Engineering",UN_Av_Eng)
const Banking_And_Finance = mongoose.model("UN_Banking_And_Finance",Un_Banking_And_Finance)
const BIO_Med = mongoose.model("UN_Bio_Medical",UN_Bio_Med)
const BIO_Chem = mongoose.model("UN_Bio_Chemistry",UN_Bio_Chem)
const BIO_Informatics = mongoose.model("UN_Bio_Informatics",UN_Bio_Info)
const BIOMedical_Eng = mongoose.model("UN_BIOMedical_Engineering",UN_BioMedical_Eng)
const Biosciences = mongoose.model("UN_Biosciences",UN_BioScience)
const BioTechnology = mongoose.model("UN_BIOTechnonolgy",UN_BioTech)
const Botany = mongoose.model("UN_Botany",UN_Botany)
const Bussiness_Administration = mongoose.model("UN_Business_Administration",UN_Bussiness_Admin)
const Bussiness_Info_Tech = mongoose.model("UN_Bussiness_Info_Tech",UN_Bussiness_Info_Technonlogy)
const Cardiology = mongoose.model("UN_Cardiology",UN_Cardiology)
const Chemical_Engineering = mongoose.model("UN_Chemical_Engineering",UN_Chemical_Eng)
const Chemical_Tech = mongoose.model("UN_Chemical_Technology",UN_Chemical_Tech)
const Chemistry = mongoose.model("UN_Chemsitry",UN_Chemistry)
const Civil_Eng = mongoose.model("UN_Civil_Engineering",UN_Civil_Eng)
const Comp_Sci = mongoose.model("UN_Computer_Science",UN_Cs)
const SE = mongoose.model("UN_Software_Eng",UN_SE)
module.exports = 
{ 
    SU_ACCOT: ACCOT,
    SU_AF: AF,
    SU_Acc_And_R_Management:A_R_M,
    SU_Aerospace_Eng:Aerospace_Eng,
    SU_Anesthesia:Anesthesia, 
    Su_App_Chemistry:App_Chem,
    SU_App_Physics:Applied_Phy,
    SU_Archi:Architechture,
    SU_AI:Artificial_Inteligence,
    SU_Aviation_Management:Aviation_Management,
    SU_Avionics_Engineering:Avionics_Engineering,
    SU_Banking_And_Finance:Banking_And_Finance,
    SU_BIO_Medical:BIO_Med,
    SU_BIO_Chem:BIO_Chem,
    SU_BIO_Info:BIO_Informatics,    
    SU_BIO_Medical_Eng:BIOMedical_Eng,
    SU_BIO_Science:Biosciences,
    SU_BIO_TECH:BioTechnology,
    SU_Bot:Botany,
    SU_Bussiness_Admin:Bussiness_Administration,
   SU_Bussiness_Info_Tech:Bussiness_Info_Tech,
   SU_Cardiology:Cardiology,
   SU_Chemmical_Eng:Chemical_Engineering,    
   SU_Chemmical_Tech:Chemical_Tech,    
   SU_Chemistry:Chemistry,
   SU_Civil_Eng:Civil_Eng,    
   SU_Comp_Sci:Comp_Sci,
   SU_SE:SE       
   
}

 
