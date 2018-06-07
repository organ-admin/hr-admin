import { Component , OnInit} from "@angular/core";
import { Ajax } from "../../common/ajax";
import 'rxjs/add/operator/toPromise';

@Component({
    selector: "trade-list",
    templateUrl: "./list.component.html",
    styleUrls:["./list.component.css"]
})

export class listComponent implements OnInit{
    constructor( private ajax : Ajax){

    }
    ngOnInit(){
        this.get();
    }
    //删除接口
    private tableParam={};
    private tableUrls="/mer/merchandise/delete";
    //获取菜单
    private tableData:any[]=[];
    private tableUrl="/mer/merchandise/list";
    private tableParams={
        cifName:"",
        buyName:"",
       
    };

    get(){
        this.ajax.post(this.tableUrl,this.tableParams).toPromise().then((res:any)=>{
            this.tableData=res.records;
            // console.log(this,this.tableData);
             res.records.forEach(val => {
                var obj={};
                obj["merchId"]=(val.merchId || "");                
                obj["buyName"]=(val.buyName || "");
                obj["cifName"]=(val.cifName || "");
                obj["prodId"]=(val.prodId || "");
                obj["price"]=(val.cell || "");
                obj["adress"]=(val.adress || "");
                obj["num"]=(val.num || "");
                obj["amount"]=(val.amount || "");
                obj["billNo"]=(val.billNo || "");                
                obj["count"]=(val.count || "");
                obj["cifName"]=(val.cifName || "");
                // obj["fabricKey"]=(val.fabricKey || "");
                // obj["no"]=(val.no || "");
                // obj["idType"]=(val.idType? (val.idType==1? "身份证":"护照") : "");
                // obj["sex"]=(val.sex? (val.sex==1? "男": "女") : "");
                this.tableData.push(obj);
            });
        })
    }
    // 搜索
    onSubmit(value) {
        this.tableParams={
            buyName : value.buyName,		
            cifName : value.cifName	 	                    	
        };
        this.ajax.post(this.tableUrl,this.tableParams).toPromise().then((res:any)=>{
            console.log(res.msg)
            this.tableData=res.records;
            console.log(this,this.tableData);
            let min = document.getElementById("minMsgspan");
            min.style.display="block";
            min.innerHTML='搜索'+res.msg;
            setTimeout(function () {
                min.style.display="none";
            }, 2000);
        })  
    }
    // 删除
    handle(ref: any): void {
        this.tableParam={
            id : ref.rowData.id                 	
        };
        this.ajax.post(this.tableUrls,this.tableParam).toPromise().then((res:any)=>{
            
            this.tableData=res.records;
            console.log(this,this.tableData);
            let min = document.getElementById("minMsgspan");
            min.style.display="block";
            min.innerHTML='操作'+res.msg;
            setTimeout(function () {
                min.style.display="none";
            }, 2000);
        })  
        ref.destroy();
    }
}