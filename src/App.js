import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { UserComponent } from './components/UserComponent';

function App() {

  // var name = "Ajit";
  // var age = 26;
  // var isMale = true;
  // var marks = 8.9;

  // var user = {
  //   name: "Harsh",
  //   age: 28,
  // };

  // var emp = [{
  //   id:1,
  //   name:"Rajvi",
  //   salary:29000,
  //   gender:"female",
  //   isActive:"false"
  // },{
  //   id:2,
  //   name:"Pavan",
  //   salary:35000,
  //   gender:"male",
  //   isActive:"true"
  // },{
  //   id:3,
  //   name:"Kruti",
  //   salary:30000,
  //   gender:"female",
  //   isActive:"true"
  // },{
  //   id:4,
  //   name:"Mohit",
  //   salary:4000,
  //   gender:"male",
  //   isActive:"true"
  // },{
  //   id:5,
  //   name:"Niraj",
  //   salary:20000,
  //   gender:"male",
  //   isActive:"false"
  // },{
  //   id:6,
  //   name:"Archi",
  //   salary:5000,
  //   gender:"female",
  //   isActive:"false"
  // }]

  var title = "User Application";
  return (
    // <div className="App">
    //   <Header />
    //   <div style={{ backgroundColor: "green" ,padding:"50px"}}>

    //     <h1>Ajay</h1>
    //     <h1>{name}</h1>
    //     <h2>Age = {age}</h2>
    //     <h3>{isMale ? "male" : "female"}</h3>
    //     {user.name}<br />
    //     {user.age}

    //   </div>

    //   <div>
    //     <h1>Employees</h1>
    //     {
    //       emp.map((e) => {
    //         return(
    //           <div style={{color : e.gender === 'male' ? 'green' : 'red'}}>
    //             {e.id}&nbsp;&nbsp;&nbsp;&nbsp;
    //             {e.name}&nbsp;&nbsp;&nbsp;&nbsp;
    //             {e.gender}&nbsp;&nbsp;&nbsp;&nbsp;
    //             {e.salary}&nbsp;&nbsp;&nbsp;&nbsp;
    //             {e.isActive}&nbsp;&nbsp;&nbsp;&nbsp;
    //             <br/>
    //           </div>
            
    //         );
    //       })
    //     }
    //   </div>
    //   <br/> 
    //   <table className='table table-hover'>
    //     <thead className='thead-dark'>
    //       <tr>
    //         <th>Id</th>
    //         <th>Name</th>
    //         <th>Gender</th>
    //         <th>Salary</th>
    //         <th>isActive</th>
    //       </tr>
    //     </thead>
    //     <tbody>{
          
    //     emp.map((e) => {
    //         return(
    //           <tr>
    //             <td>{e.id}</td>
    //             <td>{e.name}</td>
    //             <td>{e.gender}</td>
    //             <td>{e.salary}</td>
    //             <td>{e.isActive}</td>
    //           </tr>
    //         );
    //       })
    //     }
    //     </tbody>
    //   </table>
    //     <Footer />
    // </div>
    <div className='App'>
      <UserComponent title = {title}/>
    </div>
  );
}

export default App;
