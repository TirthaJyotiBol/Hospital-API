import ReportRepository from "./report.repository.js";
let reportsRepo = new ReportRepository();

export default class ReportController{
    static async getReports(req,res){
        let status = req.params.status;
        if(!status){
            return res.json({
                'message':'Status field is necessary'
            })
        }

        let reports = await reportsRepo.getReportsOnStatus(status);
        res.send(reports);
    }

    static async getAllReports(req,res){
        let reports = await reportsRepo.getAllReports();
        res.json(reports);
    }
}