import { Item } from "semantic-ui-react";
function ResumeSummary() {
  return (
    <Item.Group>
      <Item>
        <Item.Image />
        <Item.Content>
          <Item.Header as="a">firstName lastName</Item.Header>
          <Item.Description>summary</Item.Description>
          <Item.Extra>Click to learn more</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

export default ResumeSummary;
