import Express from "express";
import ReportController from "./report.controller.js";

let reportRouter = Express.Router();

reportRouter.get('/',(req,res)=>{
    ReportController.getAllReports(req,res);
})

reportRouter.get('/:status',(req,res)=>{
    ReportController.getReports(req,res);
})

export default reportRouter;