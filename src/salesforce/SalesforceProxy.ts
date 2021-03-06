import axios from 'axios';
import { Report } from './../models/Report.interface';

let proxyURL = 'https://dialogflowvoice-developer-edition.na113.force.com/v/services/apexrest/showreport';

export class SalesforceProxy {

  showReport(report: Report) {
    return axios.post(proxyURL + '/showreport', report, {headers: {'Content-Type': 'application/json'}});
  }
};
