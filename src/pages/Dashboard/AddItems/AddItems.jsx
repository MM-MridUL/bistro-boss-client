import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async(data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
            'content-type':'multipart/form-data'
        }
    });
    if(res.data.success){
        // now send the menu item data to the server with the image URL
        const menuItem ={
            name:data.name,
            category: data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
            image: res.data.data.display_url
        }
        // 
        const menuRes = await axiosSecure.post('/menu',menuItem);
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu.`,
                showConfirmButton: false,
                timer: 1500
              });

        }
    }
    console.log('with image url',res.data);

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
