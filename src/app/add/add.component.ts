import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  teacher = {
    name: '',
    username: '',
    email: '',
    sex: true
  };

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // console.log(this.teacher);
    this.httpClient
      .post('http://angular.api.codedemo.club:81/teacher', this.teacher)
      .subscribe((result) => {
          console.log('新增成功，接收到返回数据', result);
        },
        (error) => {
          console.log('请求失败!!', error);

//           为了减少沟通成本，一般情况我们都会遵守这些国际规则，
//
// 2xx 请求成
//           3xx 请求的资源已转移
//           4xx 用户发起了不合乎规则的数据
//           5xx 服务器发生了异常

        }
      );
  }
}
