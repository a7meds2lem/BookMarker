var siteName=document.getElementById('webName');
var siteURL=document.getElementById('siteUrl');
var btnBtn=document.getElementById('btnSubmit');

var links=[];

if('productList' in localStorage);  // null
{
    products=JSON.parse(localStorage.getItem('productList'));
    displayDetails(products);
}

btnBtn.onclick=function(){
    addProduct()
    displayDetails(links)
}

//          add data
    function addProduct(){
        var link={
            name:siteName.value,
            linkU:siteURL.value
            }
            links.push(link)
            localStorage.setItem('productList',JSON.stringify(links))
        }

// displayData()
    function displayDetails(data){
        var box='';
        for(i=0 ; i<data.length ; i++){
            box+=`

            <tr>
            <td>${[i]}</td>
            <td>${data[i].name}</td>
            <td>  <button class="btn btn-success btnLink" onclick="window.location.href='${data[i].linkU}'" > visit</button></td>
            <td>  <button class="btn btn-danger btnLink" onclick="deleteData(${[i]})" > Delete</button></td>
          </tr>

           <h2> </h2>

           `
        }
        document.getElementById('url').innerHTML=box
        }
    //  delete
    function deleteData(index){
       links.splice(index,1);
       localStorage.setItem('productList',JSON.stringify(links))
       displayDetails(links)
    }


///   local storage

