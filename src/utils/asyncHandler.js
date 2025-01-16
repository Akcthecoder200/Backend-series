import { Promise } from "mongoose"
//2nd method use any method try and catch or promise..here we defining a rapper for function in utils for whenever we want ...
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err)) 
    }
}
export {asyncHandler}










// 1st approach

// const asyncHandler=(fn)=>async (req,res,next)=>{
//    try {
//     await fn(req,res,next)
//    } catch (error) {
//     res.status(err.code || 500).json({
//         success:false,
//         message:err.message
//     })
//    }
// }