import Shopcard from "../../components/shopcard.js";

export default function MarketPlaceLayout() {
  const shop = [
    {
      name: "Green Thumb Fertilizers",
      address: "123 Main St, Cityville, State 12345",
    },
    {
      name: "Agro Solutions",
      address: "456 Elm St, Townsville, State 67890",
    },
    {
      name: "Crop Care Center",
      address: "789 Oak St, Villagetown, State 13579",
    },
    {
      name: "Organic Farming Supplies",
      address: "321 Maple Ave, Countryside, State 24680",
    },
    {
      name: "Harvest Helpers",
      address: "555 Pine St, Farmland, State 97531",
    },
    {
      name: "Fertilizer Emporium",
      address: "777 Cedar St, Ranchville, State 86420",
    },
    {
      name: "Grower's Choice",
      address: "888 Birch St, Orchardtown, State 73194",
    },
    {
      name: "Nutrient Nook",
      address: "999 Willow St, Fieldville, State 58206",
    },
  ];
  return (
    <div className="flex flex-between flex-wrap gap-4">
      {shop.map((item) => (
        <Shopcard name={item.name} add={item.address} />
      ))}
    </div>
  );
}
