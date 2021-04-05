import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  title = 'first-app';

  // 定义教师数组
  // 初始化教师数组
  teachers: any[] = []; // 在这里不加类型（: any[]）模版会出错

  ngOnInit(): void {
    // this.httpClient.get('assets/teacher-all.json')
    //   .subscribe(); // 预请求，是由于get的实际作用是定义了一个请求信息，而并未发起真正的请求// 只有当其被订阅时，才会真正的发起请求

    this.httpClient.get<[]>('assets/teacher-all.json')// 如果 teachers是any，可以简写成
      //   this.httpClient.get('assets/teacher-all.json')从http获取任意类型的东西
      .subscribe((teachers) => {
        console.log(teachers);
        this.teachers = teachers;
      });


  }

}
