import React from 'react';

class App extends React.Component {
   constructor(){
      super();

      this.state = {
         data: [
            {
               "id": 1,
               "name": 'Aharon',
               "lastName": 'Levi',
               "age": 23,
            },
            {
               "id": 2,
               "name": 'Elimelech',
               "lastName": 'Mendelboim',
               "age": 19,
            },
            {
               "id": 3,
               "name": 'Natan',
               "lastName": 'Shtraus',
               "age": 42,
            },
         ]
      }
   }
   render() {
      return (
         <div>
            <h1>{this.props.greeting}</h1>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      console.table(this.props);
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

App.defaultProps = {
   greeting: "hello",
}

export default App;