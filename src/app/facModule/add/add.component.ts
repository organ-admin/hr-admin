import { Component , OnInit} from "@angular/core";
import { Ajax } from "../../common/ajax";
import 'rxjs/add/operator/toPromise';

@Component({
    selector: "uesr-add",
    templateUrl: "./add.component.html",
    styleUrls:["./add.component.css"]
})

export class addComponent implements OnInit{
    constructor( private ajax : Ajax){

    }
    ngOnInit(){
        // this.get();
    }
    //获取菜单
    private tableData:any[];
    private tableUrl="/fac/financing/insert";
    private tableParams={};
      

    // 提交
    onSubmit(value) {
        if(value.cifNo!='' && value.bussType!='' &&value.prdType!='' &&value.savAmt!=''&&value.conamtFlt!=''&&value.contAmt!=''&&value.restAmt!=''&&value.bilconAmt!=''&&value.amount!=''&&value.authSts!=''&&value.txDate!=''&&value.merchId!=''){
            this.tableParams={
                cifNo : value.cifNo,
                bussType : value.bussType,
                prdType : value.prdType,
                savAmt : value.savAmt,
                conamtFlt : value.conamtFlt,
                contAmt : value.contAmt,
                restAmt : value.restAmt,
                bilconAmt : value.bilconAmt,
                appAmt : value.appAmt,
                term : value.term,
                feeRate : value.feeRate,
                fucFee : value.fucFee,
                bilFee : value.bilFee,
                brcContAmt : value.brcContAmt,
                appidType : value.appidType,
                appidNo : value.appidNo,
                appMark : value.appMark,
                corargFlg : value.corargFlg,
                corName : value.corName,
                // "coridType": "1",
                // "corNo": "1",
                // "corMark": "1",
                // "othargFlg": "1",
                // "othName": "1",
                // "othidType": "1",
                // "othidNo": "1",
                // "othMark": "1",
                // "useNo": "1"	              		          	
            };
            this.ajax.post(this.tableUrl,this.tableParams).toPromise().then((res:any)=>{
                console.log(res.msg)
                this.tableData=res.records;
                console.log(this,this.tableData);
                let min = document.getElementById("minMsgspan");
                min.style.display="block";
                min.innerHTML='信息'+res.msg;
                setTimeout(function () {
                    min.style.display="none";
                }, 2000);
            })
        } else {
            let min = document.getElementById("minMsgspan");
                min.style.display="block";
                min.innerHTML='请完善信息！';
                setTimeout(function () {
                    min.style.display="none";
                }, 2000);
          
        }     
        
    }
}
