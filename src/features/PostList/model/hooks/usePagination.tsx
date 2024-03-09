import { useEffect, useState } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const ITEM_PER_PAGE = 10;

function usePagination<T>(data: T[] | null) {
  const [page, setPage] = useState(1);
  const [itemToShow, setItemToShow] = useState<T[] | null>(null);

  useEffect(() => {
    if (!data) return;
    setItemToShow(data.slice((page - 1) * ITEM_PER_PAGE, page * ITEM_PER_PAGE));
  }, [page, data]);

  const onClickPrev = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const onClickNext = () => {
    const qnt = data ? data.length : 1;
    if (page === Math.ceil(qnt / ITEM_PER_PAGE)) return;
    setPage(page + 1);
  };

  const PaginationControlPanel = () => {
    return (
      <Flex
        gap="20px"
        alignItems="center"
        justifyContent="center"
        margin="20px auto"
      >
        <Button onClick={onClickPrev} isDisabled={page === 1}>
          <ArrowBackIcon />
          Prev
        </Button>
        <Box as="span">{page}</Box>
        <Button
          onClick={onClickNext}
          isDisabled={
            data ? page === Math.ceil(data.length / ITEM_PER_PAGE) : true
          }
        >
          Next
          <ArrowForwardIcon />
        </Button>
      </Flex>
    );
  };

  return {
    PaginationControlPanel,
    itemToShow,
  };
}

export { usePagination };
