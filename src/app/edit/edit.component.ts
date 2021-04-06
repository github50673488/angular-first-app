import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {AppComponent} from '../app.component';

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
  // Angular的依赖注入不仅仅能注入服务，还可以注入父组件 ,因为Anguar并不推荐我们这么样
  constructor(private activeRoute: ActivatedRoute
    ,         private httpClient: HttpClient,
              private appComponent: AppComponent
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
    console.log(this.teacher);
    // 获取ID，拼接URL
    const url = 'http://angular.api.codedemo.club:81/teacher/' + this.activeRoute.snapshot.params.id;
    // 发起请求，更新教师，成功时打印请求结果并刷新教师列表查看效果，失败时打印失败结果
    this.httpClient.put(url, this.teacher)
      .subscribe(data => {
          console.log('更新成功', data);
          this.appComponent.ngOnInit();
        },
        error => console.log('更新错误', error));
  }

}
