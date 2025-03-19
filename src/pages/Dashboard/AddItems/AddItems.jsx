import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subheading="What's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset my-6">
            <legend className="fieldset-legend">Recipe Name*</legend>
            <input
              type="text"
              {...register("name",{required:true})}
              required
              className="input input-bordered w-full"
              placeholder="Recipe Name"
            />
          </fieldset>
          <div className="flex gap-6">
            {/* category */}
            <fieldset className="fieldset my-6 w-full">
              <legend className="fieldset-legend">Category*</legend>
              <select
                {...register("category",{required:true})}
                className="select select-bordered w-full"
              >
                <option disabled={true}>Select a category</option>
                <option value="Salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </fieldset>

            {/* price */}
            <fieldset className="fieldset my-6 w-full">
              <legend className="fieldset-legend">Price*</legend>
              <input
                type="number"
                {...register('price',{required:true})}
                className="input input-bordered w-full"
                placeholder="Price"
              />
            </fieldset>
          </div>
          {/* Recipe Details */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Details</legend>
            <textarea
                {...register('recipe')}
              className="textarea h-24 textarea-bordered w-full"
              placeholder="Bio"
            ></textarea>
            <div className="fieldset-label">Optional</div>
          </fieldset>
          <div className="my-6">
            <input {...register('image',{required:true})} type="file" className="file-input w-full input-bordered file-input-xs" />
          </div>
          <button className="btn bg-orange-400 hover:bg-orange-700">Add Item <FaUtensils></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
