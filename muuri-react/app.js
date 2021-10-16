/* React */
import React, { useRef, useState } from "react";
/* Muuri-react */
import { MuuriComponent } from "muuri-react";
/* Utils & components */
import { boardOptions, columnOptions, useSend } from "./utils";
import { Column, Header, Demo, Item } from "./components";

// App.
export default () => {
  const boardGridRef = useRef();

  // Items state.
  const [items, setItems] = useState({
    todo: ["4", "6", "5", "10"],
    working: ["1", "3", "8"],
    done: ["2", "7", "9"]
  });

  // UseSend is used when a item changes grid
  // to sync the items state.
  const onSend = useSend(setItems);

  // Children.
  const children = {
    todo: items.todo.map(id => <Item id={id} key={id} />),
    done: items.done.map(id => <Item id={id} key={id} />),
    working: items.working.map(id => <Item id={id} key={id} />)
  };

  return (
    <Demo>
      <Header />
      <MuuriComponent {...boardOptions} ref={boardGridRef}>
        {/* 'To do' column */}
        <Column actionClass="todo" title="To do">
          <MuuriComponent
            id={"TODO"}
            groupIds={["NOTES"]}
            onSend={onSend}
            dragFixed
            {...columnOptions}
          >
            {children.todo}
          </MuuriComponent>
        </Column>
        {/* 'Working' column */}
        <Column actionClass="working" title="Working">
          <MuuriComponent
            id={"WORKING"}
            groupIds={["NOTES"]}
            onSend={onSend}
            dragFixed
            {...columnOptions}
          >
            {children.working}
          </MuuriComponent>
        </Column>
        {/* 'Done' column */}
        <Column actionClass="done" title="Done">
          <MuuriComponent
            id={"DONE"}
            groupIds={["NOTES"]}
            onSend={onSend}
            dragFixed
            {...columnOptions}
          >
            {children.done}
          </MuuriComponent>
        </Column>
      </MuuriComponent>
    </Demo>
  );
};
