// const obj = [{
//     key: "sample 1",
//     data: "Data1",
// },{
//     key: "sample 1",
//     data: "Data1",
// },
// {
//     key: "sample 2",
//     data: "Data1",
// },
// {
//     key: "sample 1",
//     data: "Data1",
// },
// {
//     key: "sample 3",
//     data: "Data1",
// },
// {
//     key: "sample 4",
//     data: "Data1",
// }]

// const outpt = {};

// obj.forEach(ele => {
//    if(outpt[ele.key]){
//        outpt[ele.key].push(ele);  //now key sample 1 exist it will store a sample1 there
//    }
    
//    else{
//    outpt[ele.key] = [ele]    //{"sample 1": [ { key: "sample 1", data: "Data1" } ]}

//    }
// });

// console.log(outpt);

// outpt
// {
//   'sample 1': [
//     { key: 'sample 1', data: 'Data1' },
//     { key: 'sample 1', data: 'Data1' },
//     { key: 'sample 1', data: 'Data1' }
//   ],
//   'sample 2': [ { key: 'sample 2', data: 'Data1' } ],
//   'sample 3': [ { key: 'sample 3', data: 'Data1' } ],
//   'sample 4': [ { key: 'sample 4', data: 'Data1' } ]
// }
