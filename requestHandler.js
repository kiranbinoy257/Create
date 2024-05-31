
import contactSchema from './models/contact.model.js'

export async function addContact(req,res){
    console.log(req.body);
    try{
        const{name,number}=req.body;
        await contactSchema
        .create({name,number})
        .then(()=>{
            res.status(201).send({msg:"successully created"});
        })
        .catch((error)=>{
            res.status(404).send({error:error});
        });
        }catch(error){
            res.status(500).send(error)
        }
}

export async function getContacts(req,res){
    try{
        const data=await contactSchema.find();
        res.status(200).send(data)
    }catch (error){
        res.status(500).send(error)
    }

}

                                   