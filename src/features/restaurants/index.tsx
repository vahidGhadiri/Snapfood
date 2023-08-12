import React from "react";
import { useGetRestaurantVendorsQuery } from "@src/core/restaurants";
import { DataList, VendorCard } from "@src/components";
import { useGeoLocation } from "@src/hooks";

const PAGE_SIZE = 10;

const Restaurant = () => {
  const { location } = useGeoLocation();
  const [page, setPage] = React.useState(0);
  const { data } = useGetRestaurantVendorsQuery({
    lat: location?.latitude,
    long: location?.longitude,
    page,
    pageSize: PAGE_SIZE,
  });

  const onNext = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <DataList onNext={onNext} endMessage="..." height="100vh" isEnd={false}>
        {data?.data?.finalResult?.map(
          (item, index) =>
            item.type !== "TEXT" && (
              <VendorCard
                key={index}
                background={item.data?.backgroundImage}
                logo={item.data?.logo}
                title={item.data?.title}
                rate={item.data?.rate}
                description={item.data?.description}
                isOpen={item.data?.isOpen}
                commentCount={item.data?.commentCount}
                deliveryFee={item.data?.deliveryFee}
                deliveryGuarantee={item.data?.deliveryGuarantee}
              />
            )
        )}
      </DataList>
    </div>
  );
};

export default Restaurant;
