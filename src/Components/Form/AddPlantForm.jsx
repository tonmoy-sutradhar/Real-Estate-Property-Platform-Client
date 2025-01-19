import { TbFidgetSpinner } from "react-icons/tb";
import { shortImageName } from "../../utilities";

const AddPlantForm = ({
  handleSubmit,
  uploadImage,
  setUploadImage,
  loading,
}) => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] border-2 border-purple-500 flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <h1 className="text-4xl font-bold text-purple-500 mb-11 border-b-4">
        Add Property
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          <div className="space-y-6">
            {/* Property Title */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Property Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="title"
                id="title"
                type="text"
                placeholder="Property title"
                required
              />
            </div>

            {/* Property location */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600 ">
                Property location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="location"
                id="location"
                type="text"
                placeholder="Property title"
                required
              />
            </div>
          </div>
          <div className="space-y-6 flex flex-col">
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600 ">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price of Property"
                  required
                />
              </div>
            </div>
            <div className=" p-4  w-full  m-auto rounded-lg flex-grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      onChange={(e) =>
                        setUploadImage({
                          image: e.target.files[0],
                          url: URL.createObjectURL(e.target.files[0]),
                        })
                      }
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-purple-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-purple-700">
                      {/* {uploadImage?.image?.name} */}
                      {shortImageName(uploadImage?.image)}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            {uploadImage && uploadImage?.image?.size && (
              <div className="flex gap-5 items-center">
                <img className="w-20" src={uploadImage?.url} alt="" />
                <p>Image Size: {uploadImage?.image?.size} Bytes</p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-3 -mt-8 text-center font-medium text-white   transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Add property"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlantForm;
