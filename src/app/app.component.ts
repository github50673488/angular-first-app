import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

type Teacher = {
  id: number,
  name: string,
  username: string,
  email: string,
  sex: true
};

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
  // teachers: any[] = []; // 在这里不加类型（: any[]）模版会出错
  teachers = [] as Teacher[];

  ngOnInit(): void {
    // this.httpClient.get('assets/teacher-all.json')
    //   .subscribe(); // 预请求，是由于get的实际作用是定义了一个请求信息，而并未发起真正的请求// 只有当其被订阅时，才会真正的发起请求

    // this.httpClient.get<[]>('assets/teacher-all.json')// 如果 teachers是any，可以简写成
    //   this.httpClient.get('assets/teacher-all.json')从http获取任意类型的东西


    // this.httpClient.get<[]>('http://angular.api.codedemo.club:81/teacher')
    this.loadFromHttp();


  }

  private loadFromHttp(): void {
    this.httpClient.get<Teacher[]>('http://angular.api.codedemo.club:81/teacher')
      .subscribe((teachers) => {
        console.log(teachers);
        this.teachers = teachers;
      });
  }

  onDelete(id: number): void {

    const url = `http://angular.api.codedemo.club:81/teacher/${id}`; // 我们在此使用是`而非' `123${a}` 等价于'123' + a
    this.httpClient.delete(url)
      .subscribe(data => {
          console.log('删除成功');
          this.loadFromHttp();
        },
        error => console.log('删除失败', error));
  }
}
