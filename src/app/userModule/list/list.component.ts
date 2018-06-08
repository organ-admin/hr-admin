import { Component , OnInit} from "@angular/core";
import { Router } from "@angular/router"
import { Ajax } from "../../common/ajax";
import 'rxjs/add/operator/toPromise';

@Component({
    selector: "uesr-list",
    templateUrl: "./list.component.html",
    styleUrls:["./list.component.css"]
})

export class listComponent implements OnInit{
    constructor( private ajax : Ajax, private router : Router){

    }
    ngOnInit(){
        this.get();
    }
    private editShow:boolean=false;
    private detailsShow:boolean=false;
    private tableUrld="/mer/user/select";
    //编辑接口
    private mysForm:any[];    
    private tableUrlup="/mer/user/update";
    //删除接口
    private tableParam={};
    private tableUrls="/mer/user/delete";
    //获取菜单
    private tableData:any[]=[];
    private tableUrl="/mer/user/list";
    private tableParams={
        useId:"",
        passwd:"",
        cell:""
    };
    // 获取列表
    get(){
        this.ajax.post(this.tableUrl,this.tableParams).toPromise().then((res:any)=>{
            res.records.forEach(val => {
                var obj={};
                obj["id"]=(val.id || "");                
                obj["useNoMark"]=(val.useNoMark || "");
                obj["useId"]=(val.useId || "");
                obj["passwd"]=(val.passwd || "");
                obj["cell"]=(val.cell || "");
                obj["idType"]=(val.idType? (val.idType==1? "身份证":"护照") : "");
                obj["sex"]=(val.sex? (val.sex==1? "男": "女") : "");
                this.tableData.push(obj);
            });
		});
    }
    // 删除
    handle(ref: any): void {
        // this.$confirm('此操作将删除用户, 是否继续?', '提示', {
        //         confirmButtonText: '确定',
        //         cancelButtonText: '取消',
        //         type: 'warning'
        // })
        let row = ref.rowData;
        this.tableParam={
            id : row.id	                 	
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
    // 编辑
    upbtns(ref: any,value): void {
        this.editShow=true;
        this.mysForm  = ref.rowData;
        let row = ref.rowData;
        this.tableParam={
            id : row.id	                 	
        };
        this.ajax.post(this.tableUrld,this.tableParam).toPromise().then((res:any)=>{
            console.log(res)
            console.log(value)
            // value=res.records;
            value.cell = res.cell;
            value.corpMark = res.corpMark;
            value.corpName = res.corpName; 
            value.email = res.email; 
            value.idNo = res.idNo; 
            value.idType = res.idType; 
            value.jobName = res.jobName; 
            value.passwd = res.passwd; 
            value.sex = res.sex; 
            value.useId = res.useId; 
            value.useName = res.useName; 
            value.useNoMark = res.useNoMark;  
            console.log(value.sex)       
        // console.log(this,this.tableData);
            // let min = document.getElementById("minMsgspan");
            // min.style.display="block";
            // min.innerHTML='操作'+res.msg;
            // setTimeout(function () {
            //     min.style.display="none";
            // }, 2000);
        })  

    }
    onsbmit(value){
        // let row = ref.rowData;
        // this.tableParam={
        //     id : row.id	                 	
        // };
        // this.ajax.post(this.tableUrl,this.tableParam).toPromise().then((res:any)=>{
        //     console.log(res.records)
        //     this.tableData=res.records;
        //     console.log(this,this.tableData);
        //     // let min = document.getElementById("minMsgspan");
        //     // min.style.display="block";
        //     // min.innerHTML='操作'+res.msg;
        //     // setTimeout(function () {
        //     //     min.style.display="none";
        //     // }, 2000);
        // })  
    }
    // 详情
    details(ref: any): void {
        // console.log(ref.rowData.id);
        this.detailsShow=true;
    }
    // 搜索
    onSubmit(value) {
        this.tableParams={
            cell : value.cell,		
            passwd : value.passwd,	 	
            useId : value.useId                	
        };
        this.ajax.post(this.tableUrl,this.tableParams).toPromise().then((res:any)=>{
            this.tableData=res.records;
            let min = document.getElementById("minMsgspan");
            min.style.display="block";
            min.innerHTML='搜索'+res.msg;
            setTimeout(function () {
                min.style.display="none";
            }, 2000);
        })  
    }
    
}
