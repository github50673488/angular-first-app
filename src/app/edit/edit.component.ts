import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public teacher: any;

  constructor(private activeRoute: ActivatedRoute
    ,         private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params.id;
    console.log('获取到的路由参数id值为', id);

    // 拼接请求URL
    const url = 'http://angular.api.codedemo.club:81/teacher/' + id;
    // 发起请求，成功时并打印请求结果，失败时打印失败结果
    this.httpClient.get(url)
      .subscribe((data) => {
        console.log('成功', data);
        this.teacher = data;
      }, (error) => {
        console.log('失败', error);
      });

  }

}
