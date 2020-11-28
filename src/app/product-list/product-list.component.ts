import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products=[]
  //member attribute
  httpClient:HttpClient


  constructor(
    httpClient:HttpClient) {

      this.httpClient = httpClient
     }

  ngOnInit(): void {
  }

  loadProducts(){
    const url = 'http://localhost:4000/product/'

    //send a get request
    const request = this.httpClient.get(url)

    //get the response
    request.subscribe(response => {
      console.log(`response`)
      console.log(response)
      if (response['status'] == 'success'){
        this.products = response['data']
      }
    })

  }

}
