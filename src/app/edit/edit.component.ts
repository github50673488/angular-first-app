import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  teacher = {} as {
    name: string,
    username: string,
    email: string,
    sex: boolean
  };

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
    this.httpClient.get<any>(url)
      .pipe(delay(1000))// 模似请求数据时发生了1秒的延迟：
      .subscribe((data) => {
        console.log('成功', data);
        this.teacher = data;
      }, (error) => {
        console.log('失败', error);
      });

  }

  onSubmit(): void {
    console.log('点击提交按钮');
  }

}
