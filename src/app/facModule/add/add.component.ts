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
        this.get();
    }
    //获取菜单
    private tableData:any[];
    private tableUrl="/mer/user/insert";
    private tableParams={
        useId:"",
        passwd:"",
        cell:""
    };

    get(){
        this.ajax.post(this.tableUrl,this.tableParams).toPromise().then((res:any)=>{
            this.tableData=res.records;
            console.log(this,this.tableData);
        })
    }
}