import ReportModel from "./report.schema.js";

export default class ReportRepository{
    async getAllReports(){
        try{
            let reports = await ReportModel.find();
            return {
                'status':true,
                'reports':reports
            };
        }   
        catch(err){
            return {
                'status':false,
                'message':'Error: '+err
            };
        }
    }

    async getReportsOnStatus(status){
        try{
            let response;
            let reports = await ReportModel.find({status});
            if(reports){
                response =  {
                    'status':true,
                    'reports':reports
                }
            }
            else{
                response =  {
                    'status':false,
                    'message':'No Reports on status '+status
                }
            }
            return response;
        }
        catch(err){
            return {
                'status':false,
                'message':`Report with status ${status} not found`
            }
        }
    }
}