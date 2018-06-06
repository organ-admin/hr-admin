import { Component , OnInit} from "@angular/core";
import { Router } from "@angular/router"
import { Ajax } from "../../common/ajax";
import 'rxjs/add/operator/toPromise';

@Component({
    selector: "uesr-list",
    templateUrl: "./list.component.html"
})

export class listComponent implements OnInit{
    constructor( private ajax : Ajax, private router : Router){

    }
    ngOnInit(){
        this.get();
    }
    //获取菜单
    private tableData:any[]=[];
    private tableUrl="/mer/user/list";
    private tableParams={
        useId:"",
        passwd:"",
        cell:""
    };

    get(){
        this.ajax.post(this.tableUrl,this.tableParams).toPromise().then((res:any)=>{
            res.records.forEach(val => {
                var obj={};
                obj["id"]=(val.id || "");                
                obj["useNoMark"]=(val.useNoMark || "");
                obj["useId"]=(val.useId || "");
                obj["passwd"]=(val.passwd || "");
                obj["cell"]=(val.cell || "");
                obj["idType"]=(val.idType || "");
                obj["sex"]=(val.sex || "");
                this.tableData.push(obj);
            });
		});
    }
    handle(ref: any): void {
        console.log(ref.index)
    }
}
