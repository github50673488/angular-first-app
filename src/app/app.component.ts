import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {
  }

  title = 'first-app';

  // 定义教师数组
  teachers = [{
    id: 1,
    name: '张三',
    username: 'zhangsan',
    email: 'zhangsan@yunzhiclub.com',
    sex: true
  }, {
    id: 2,
    name: '李四',
    username: 'lisi',
    email: 'lisi@yunzhiclub.com',
    sex: false
  }];

}
