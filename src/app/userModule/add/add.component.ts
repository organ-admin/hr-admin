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
    private tableUrl="/mer/user/insert";
    private tableParams={};
        // useId:"",
        // passwd:"",
        // cell:""
    

  
    // 提交
    onSubmit(value) {
        if(value.useNoMark!='' && value.useName!='' &&value.useId!='' &&value.passwd!=''&&value.sex!=''&&value.idType!=''&&value.idNo!=''&&value.cell!=''&&value.email!=''&&value.corpName!=''&&value.corpMark!=''&&value.corpName!=''){
            this.tableParams={
                useNoMark : value.useNoMark,		
                useName : value.useName,	 	
                useId : value.useId,		
                // useLogname : value.useLogname,		
                passwd : value.passwd,		
                sex : value.sex,	
                idType : value.idType,		
                idNo : value.idNo,		
                cell : value.cell,		
                email : value.email,		
                corpName : value.corpName,		
                corpMark : value.corpMark,		
                jobName	: value.corpName,	
                //rolMark	: value.rolMark,	
                // logTime	: value.logTime,	
                //lastLogTime	: value.lastLogTime,	
                // logNos : value.logNos	
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
