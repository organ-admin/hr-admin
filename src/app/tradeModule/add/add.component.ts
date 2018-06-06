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
    private tableUrl="/mer/merchandise/insert";
    private tableParams={};
      

    // 提交
    onSubmit(value) {
        if(value.billNo!='' && value.cifName!='' &&value.buyName!='' &&value.no!=''&&value.prodId!=''&&value.adress!=''&&value.price!=''&&value.num!=''&&value.amount!=''&&value.authSts!=''&&value.txDate!=''&&value.merchId!=''){
            this.tableParams={
                merchId	: value.merchId,
                billNo : value.billNo,		
                cifName : value.cifName,	 	
                buyName : value.buyName,			
                no : value.no,		
                prodId : value.prodId,	
                adress : value.adress,		
                price : value.price,		
                num : value.num,		
                amount : value.amount,		
                // authSts : value.authSts,		
                // txDate : value.txDate,			              		          	
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
