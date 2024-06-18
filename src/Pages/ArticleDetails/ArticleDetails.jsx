import img from "../../assets/original-88886f9f92f1045ce3e5a586bcafe0b9.png";
const ArticleDetails = () => {
  return (
    <div className="space-y-4 mb-10">
      <h2 className="text-xl md:text-4xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <div>
        <img className="h-[215px] md:h-[350px] w-full" src={img} alt="" />
      </div>
      <div>
        <h4 className=" font-semibold">Gardian publication</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem earum eaque natus repellat sapiente aliquid velit dolorum, quos omnis sint eos similique in aspernatur ullam necessitatibus itaque voluptatum facilis libero consequuntur atque officia? Excepturi repellat consequuntur doloribus animi fugiat quisquam sequi eum. Fugiat ad ipsa at est eius. Esse?</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
