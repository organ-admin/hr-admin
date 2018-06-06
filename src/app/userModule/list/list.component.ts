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
		});
		// this.tableData = [
		// 	{ cell: "789", count: 1000, current: 1, delFlag: "1", id: 3, isPage: true, page: 10, passwd: "cuisite", sex: "2", size: 100, useId: "3", useLogname: "yifulin", useName: "yifulin", useNoMark: "3" },
		// 	{ cell: "790", count: 1000, current: 1, delFlag: "1", id: 3, isPage: true, page: 10, passwd: "cuisite", sex: "2", size: 100, useId: "3", useLogname: "yifulin", useName: "yifulin", useNoMark: "3" },
		// 	{ cell: "791", count: 1000, current: 1, delFlag: "1", id: 3, isPage: true, page: 10, passwd: "cuisite", sex: "2", size: 100, useId: "3", useLogname: "yifulin", useName: "yifulin", useNoMark: "3" },
		// 	{ cell: "792", count: 1000, current: 1, delFlag: "1", id: 3, isPage: true, page: 10, passwd: "cuisite", sex: "2", size: 100, useId: "3", useLogname: "yifulin", useName: "yifulin", useNoMark: "3" },
		// 	{ cell: "793", count: 1000, current: 1, delFlag: "1", id: 3, isPage: true, page: 10, passwd: "cuisite", sex: "2", size: 100, useId: "3", useLogname: "yifulin", useName: "yifulin", useNoMark: "3" },
		// 	{ cell: "794", count: 1000, current: 1, delFlag: "1", id: 3, isPage: true, page: 10, passwd: "cuisite", sex: "2", size: 100, useId: "3", useLogname: "yifulin", useName: "yifulin", useNoMark: "3" },
		// ]
    }
    handle(ref: any): void {
        console.log(ref.index)
        // console.log(ref.rowData)
        // console.log(ref.innerHTML)
        //ref.destroy()
    }
}
