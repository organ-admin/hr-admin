import { Component , OnInit} from "@angular/core";
import { Ajax } from "../../common/ajax";
import 'rxjs/add/operator/toPromise';

@Component({
    selector: "fac-list",
    templateUrl: "./list.component.html"
})

export class listComponent implements OnInit{
    constructor( private ajax : Ajax){

    }
    ngOnInit(){
        this.get();
    }
    //获取菜单
    private tableData:any[];
    private tableUrl="/fac/financing/list"; 
    private tableParams={
        cifName:"",
        bussType:"",
        buyName:"",
        prdType:""
    };

    get(){
        this.ajax.post(this.tableUrl,this.tableParams).toPromise().then((res:any)=>{
            this.tableData=res.records;
            console.log(this,this.tableData);
        })
    }
     // 搜索
    onSubmit(value) {
        this.tableParams={
            cifName : value.cifName,		
            bussType : value.bussType,	 	
            buyName : value.buyName,
            prdType : value.prdType                	
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
    // handle(ref: any): void {
    //  console.log(ref.index)
    // console.log(ref.rowData)
    // console.log(ref.innerHTML)
    // ref.destroy()
    // }
}