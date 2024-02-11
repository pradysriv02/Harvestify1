export default function FertilizerLayout() {
  const fertilizers = [
    {
      name: "10-26-26",
      uses: "Used as a complex fertilizer for supply of all three major nutrient like Nitrogen, Phosphorus and Potash. Used in basal application in crops like Wheat, Paddy, Maize, Pulses, Sugarcane, Vegetables etc. NPK is a DAP based composite fertiliser and is produced at IFFCOs Kandla unit, which apart from NPK 10:26:26 and also produces NPK 10-26-26. NPK 10-26-26 fixes the phosphorus and potassium content in the soil and is highly effective in soils with leaching condition. The product is granular and comes in moisture resistant HDP bags allowing easy handling and storage. It is highly efficient on soils with low potassium content, fine-textured soils with a leaching water condition.",
      advantages:
        "Fully covers crop's need for phosphorus and potassium, provides a starter dose of nitrogen 100% doses perfectly restores soil fertility for a future harvest Most efficient on soils with high mineral nitrogen content Applied fortechnical (potatoes, sugar beets, sunflowers) and cereal crops (winterwheat and barley)",
      application: "Period: autumn, spring",
      Method: "During sowing and Broadcasting",
      Soils: "All soils",
    },
    {
      name: "14-35-14",
      uses: "romor 14-35-14, by Coromandel Fertilisers Limited, Secunderabad, is a scientific complex Fertiliser, which has Nitrogen, Phosphate and Potash in the right ratio. It contains the highest nutrient content 63%, amongst all NPK complex fertilisers. Gromor 14-35-14 contains Potash. It does not contain any filler material. It has the highest content of Phosphate : 35 %, among all NPK Complex Fertilisers. Gromor 14-35-14 has earned the reputation of being a Scientific Complex FertiliserGromor 14-35-14 is suitable for a variety of crops like Paddy, Groundnut, Cotton, Sunflower, Wheat, Potato, Vegetables, etc.Highest nutrient content among N:P:K fertilizers with 63% nutrients. Highest phosphorous content of 35% among NPK Grades.N:P2O5:K2O in the ratio of 1:2.5:1, which is scientifically ideal for basal application and top dressing.It also contains Potassium (14%) besides Nitrogen and Phosphorous helps for higher quality.",
      advantages:
        "Provides faster root growth, higher plant growth and farm returns. No clod formation assures uniform distribution in the field. Ammonical form of Nitrogen assures less losses in the soil.",
      application:
        "Best complex fertiliser for paddy, cotton, soybean, potato, sugarcane and vegetables to apply at the time of planting and topdressing. Paddy 70-120kg; Cotton 250-300 kg; Chilly 200-225 kg; Maize 100-120 kg; Groundnut; Soybean 50-75 kg; Sugarcane 200-250 kg; Vegetables 75-100 kg; Potato 200-220 kg",
    },
    {
      name: "1515-15",
      uses: "Its Universal, can be used on all the crops (from vegetables to fruit trees). Nitrogen is essential in promoting the growth of leaves and vegetation. Phosphorous promotes roots and shoots growth. Potassium is important for regulation of water and nutrient movement in plant cells, thereby promoting fruiting, flowering, hardiness and promote the overall health of the plant by providing resistance to diseases.",
      advantages:
        "It has good storage properties Due to high water solubility, has a greater mobility in the soil. Being non- hygroscopic, can be conveniently stored well even in high rainfall areas",
      application:
        "Suitable for all crops both for initial application and top dressing Granules are stronger, harder and of uniform size which facilitates easy application",
    },
    {
      name: "20-20",
      uses: "NPK 20-20-20 plant fertilizer is a well-balanced blend of essential nutrients designed to promote healthy plant growth and development. With its equal parts of nitrogen (N), phosphorus (P), and potassium (K), this fertilizer provides plants with the necessary elements for robust growth, strong roots, and vibrant blooms. One of the key features of NPK 20-20-20 is its versatility, making it suitable for a wide range of plants including vegetables, fruits, flowers, and ornamentals. Whether you're growing tomatoes in your garden or cultivating roses in your backyard, this fertilizer can meet the nutritional needs of various plant species. Nitrogen, the first component in the formula, plays a crucial role in stimulating vegetative growth by promoting lush foliage and sturdy stems. This results in healthier plants that are better equipped to withstand environmental stressors and produce abundant yields. Phosphorus, the second component, is essential for root development and flower formation. It helps plants establish strong root systems, which are vital for nutrient uptake and overall plant health. Additionally, phosphorus encourages the production of vibrant, colorful flowers and ensures the development of high-quality fruits. Potassium, the third component, aids in regulating water balance within plants and improving their overall resilience to diseases and adverse conditions. By maintaining proper water uptake and distribution, potassium helps plants maintain turgor pressure, which is essential for structural integrity and optimal growth.",
      advantages:
        "One of the advantages of NPK 20-20-20 is its quick-acting nature, providing plants with immediate access to essential nutrients for rapid growth and development. Moreover, its long-lasting formula ensures a continuous supply of nutrients over several weeks or months, reducing the need for frequent applications. Another benefit of NPK 20-20-20 is its ease of application. Whether applied as a soil amendment, a foliar spray, or a liquid fertilizer, it can be conveniently integrated into existing gardening practices. Furthermore, its organic composition makes it safe for use in organic gardens, free from harmful chemicals and synthetic additives.",
      application:
        "egular use of NPK 20-20-20 can lead to significant improvements in plant health and appearance. From larger yields and better quality fruits and vegetables to more vibrant and long-lasting flowers, this fertilizer contributes to the overall success of gardening endeavors, ensuring thriving and beautiful plants for enthusiasts and professionals alike.",
    },
    {
      name: "28-28",
      uses: "A fertilizer with a 28-28 composition is balanced in nitrogen (N), phosphorus (P), and potassium (K), with each component making up 28% of the total composition. This balanced ratio ensures that plants receive adequate amounts of all three essential nutrients for healthy growth and development. Nitrogen (N):Nitrogen is crucial for promoting vegetative growth, including the development of leaves and stems.It is essential for the synthesis of chlorophyll, the green pigment responsible for photosynthesis.Nitrogen deficiency can lead to stunted growth, yellowing of leaves (chlorosis), and reduced yields.Phosphorus (P):Phosphorus is essential for root development, flowering, and fruiting.It plays a vital role in energy transfer within plants, especially during the early stages of growth.Phosphorus deficiency can result in poor root development, delayed flowering, and reduced fruit set.Potassium (K):Potassium is involved in various physiological processes, including water regulation, enzyme activation, and disease resistance.",
      advantages:
        "Fertilizers with a 28-28 composition provide a balanced supply of nutrients, making them suitable for a wide range of plants, including vegetables, fruits, flowers, and ornamentals. They can be applied during the growing season to support healthy plant growth and development.",
      application:
        "It's important to follow recommended application rates and practices to avoid overfertilization, which can lead to nutrient imbalances, environmental pollution, and plant damage. Additionally, soil testing can help determine the specific nutrient needs of your plants and guide fertilizer application decisions.",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-3xl font-bold mb-8">
        {`Fertilizer Recommended: ${fertilizers[0].name}`}{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl  font-semibold mb-4">Advantages</h2>
          {fertilizers[0].advantages}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4">
            Application Methods
          </h2>
          {fertilizers[0].application}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Types of Soil Fertilizers
          </h2>
          {fertilizers[0].Soils}
        </div>
      </div>
    </div>
  );
}
