import React from 'react';

const ListItem = ({item}) =>  <li> {item}</li>

const List = ({data : listData}) => (
  <div>
  <ul>
  {
      listData.map(item => <ListItem item={item}/>)
  }
  </ul>
  </div>
);

export default List;