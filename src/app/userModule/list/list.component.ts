import { Component , OnInit} from "@angular/core";
import { Ajax } from "../../common/ajax";
import 'rxjs/add/operator/toPromise';

@Component({
    selector: "uesr-list",
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
    private tableUrl="/mer/user/list";
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
    handle(ref: any): void {
     console.log(ref.index)
    // console.log(ref.rowData)
    // console.log(ref.innerHTML)
    ref.destroy()
    }
    // onSibmit(value){
    //     console.log(value)
    // }
}