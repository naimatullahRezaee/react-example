import { useState } from "react";

// import "./ListGroup.css";
import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li<ListItemProps>`
  background: ${(props) => (props.active ? "blue" : "none")};
  padding: 5px 0;
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   let selectIndex = 0;

  const [selectIndex, setSelectIndex] = useState(0);

  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );
  //     else
  //   }

  //   const Message = items.length === 0 ? <p>No item found</p> : null;
  //   function getMessage() {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   }

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectIndex}
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
