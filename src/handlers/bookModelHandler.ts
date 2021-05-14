import {Request,Response,Application} from 'express'
import {Book,BookStore} from '../models/bookModel'
import authorize from '../middleware/authorization'
const store=new BookStore()

const index =async (_req: Request,res:Response)=>{
  const result= await store.index()
  res.json(result)
}

const show =async (_req: Request,res:Response,id:number)=>{
  const result= await store.show(id)
  res.json(result)
}

const create =async (req: Request,res:Response)=>{
  const book:Book= {
    id:req.body.id,
    title:req.body.title,
    author:req.body.author,
    total_pages:req.body.total_pages,
    summary:req.body.summary
  }
  try{
  const result= await store.create(book)
  res.json(result)
  }catch(err){
    res.status(404)
    res.json(err)
  }
}

const remove =async (_req: Request,res:Response,id:number)=>{
  const result= await store.delete(id)
  res.json(result)
}

const bookstoreRouteHandler =async (app:Application)=>{
  app.get('/books',index)
  app.get('/books/:id',index)
  app.delete('/books/id',authorize,index)
  app.post('/books',authorize,index)
}

export default bookstoreRouteHandler
// _ used in arguments when the parameter has to be mentions but not used also called
// throw away arguments