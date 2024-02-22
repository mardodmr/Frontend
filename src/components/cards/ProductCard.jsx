import {
  Card,
  ButtonGroup,
  Divider,
  Text,
  Heading,
  CardBody,
  Image,
  Button,
  AspectRatio,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function ProductCard(props) {
  const { name, description, price, productImg } = props.data; // destructure orders data object from props

  return (
    <Card borderRadius={0} width={"250px"}>
      <AspectRatio ratio={16 / 9}>
        <Image src={productImg} />
      </AspectRatio>
      <CardBody>
        <Heading size="md">{name}</Heading>
        <Text noOfLines={1}>{description}</Text>
        <Text color="blue.600" fontSize="md">
          {`${price.toLocaleString()} Syrian Lira`}
        </Text>
        <Divider />
        <ButtonGroup size="md" spacing="2">
          <Button variant="solid" color="white" bg="black" borderRadius={0}>
            Buy now
          </Button>
          <Button borderRadius={0} leftIcon={<AddIcon />}>
            Wishlist
          </Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
