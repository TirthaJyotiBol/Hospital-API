ANALYSIS:

1. Registration of Doctor
2. Once a doctor registered, he/she can Register a  patient
3. Doctor and Patient have different Schema, helps in scaling
4. When a patient is registered doctor can create a report.
5. report can have 5 status: [Negative, Travelled-Quarantine, Symptoms-Quarantine,Positive-Admit]
6. On the basis of status Doctor can view the reports.
7. User can also get all the reports.
8. Seperate schema for Reports, that contains doctor_id / patient_id / status / Date.
9. Seperate schema is used such that it can be scaled