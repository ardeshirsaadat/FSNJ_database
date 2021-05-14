//@ts-ignore
import client from '../database'
import bcrypt, { hash } from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
const {BCRYPT_PASSWORD,SALT_ROUNDS}= process.env

export type User={
  id:number;
  username:string;
  password:string;
}

export class UserInterface{
  async createUser(u:User):Promise<User[]> {
    try{
      // @ts-ignore
    const con = await client.connect();
    const sql="Insert into users(user_name,password) values ($2,$3)";
    const hash=bcrypt.hashSync(u.password+BCRYPT_PASSWORD,parseInt(SALT_ROUNDS));
    const result=await con.query(sql,[u.username,hash]);
    const user=result.rows[0];
    con.release();
    return user;
    }catch(e){
      throw new Error('unable to create user')
    }
  }

  async authenticate(username:string,password:string):Promise<User | null>{
    // @ts-ignore
    const con= await client.connect()
    const sql="select password from users where user_name=($1)"
    const result= await con.query(sql,[u.username])
    
    if (result.rows.length){
      const user=result.rows[0]
      if(bcrypt.compareSync(password+BCRYPT_PASSWORD,user.password)){
        return user
      }
    
    
    }
    return null
  }
}