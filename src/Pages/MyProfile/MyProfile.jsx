import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  return (
    <div className="border-2 rounded-xl p-4 md:p-10">
      <Helmet>
        <title>Eco Times | UpdateCraft</title>
      </Helmet>

      <h2 className="text-3xl mb-8 text-center font-semibold">
        Update Profile
      </h2>
      <form>
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              name="item_name"
              placeholder="item_name"
              defaultValue={craft?.item_name}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              name="processing_time"
              placeholder="processing_time"
              defaultValue={craft?.processing_time}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <select
              name="subcategory_name"
              id="subcategory_name"
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              defaultValue={craft?.subcategory}
              placeholder="subcategory_name"
            >
              <option value="Landscape Painting" selected>
                Landscape Painting
              </option>
              <option value="Portrait Drawing" selected>
                Portrait Drawing
              </option>
              <option value="Watercolour Painting" selected>
                Watercolour Painting
              </option>
              <option value="Oil Painting" selected>
                Oil Painting
              </option>
              <option value="Charcoal Sketching" selected>
                Charcoal Sketching
              </option>
              <option value="Cartoon Drawing" selected>
                Cartoon Drawing
              </option>
            </select>
          </div>
          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <select
              name="customization"
              id="customization"
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              defaultValue={craft?.customization}
              placeholder="customization"
            >
              <option value="yes" selected>
                Yes
              </option>
              <option value="no" selected>
                No
              </option>
            </select>
          </div>
          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <select
              name="stockStatus"
              id="stockStatus"
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              defaultValue={craft?.stockStatus}
              placeholder="stockStatus"
            >
              <option value="in_stock" selected>
                In stock
              </option>
              <option value="made_to_order" selected>
                Made to Order
              </option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="short description"
              defaultValue={craft?.description}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered w-full"
              defaultValue={craft?.price}
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="rating"
              className="input input-bordered w-full"
              defaultValue={craft?.rating}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              defaultValue={craft?.photo}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Update Craft"
          className="btn text-white btn-block bg-black"
        />
      </form>
    </div>
  );
};

export default MyProfile;
