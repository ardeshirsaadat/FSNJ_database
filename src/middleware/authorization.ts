import jsonwebtoken from 'jsonwebtoken'
import {Response,Request} from 'express'
const authorize= (req:Request,res:Response,next)=>{
  try{
    const authHeader=req.headers.authorization
    const token=authHeader?.split(" ")[1]
    const result= jsonwebtoken.verify(token,process.env.Token_key)
    next()
  }catch(err){
    res.status(401)
  }
}
export default authorize