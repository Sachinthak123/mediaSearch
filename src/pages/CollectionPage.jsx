import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/CollectionSlice"

const CollectionPage = () => {

  const collection = useSelector((state) => state.collection.items)

   const dispatch = useDispatch()

  const clearAll = () => {

    dispatch(clearCollection())
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

  {collection.length > 0 ? (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Your Collection
        </h2>

        <button
          onClick={clearAll}
          className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-medium text-white shadow-lg transition-all duration-300 active:scale-95"
        >
          Clear Collection
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {collection.map((item, idx) => (
          <CollectionCard key={idx} item={item} />
        ))}
      </div>
    </>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="text-7xl mb-4">📁</div>
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-300">
        Collection is Empty
      </h2>
      <p className="text-gray-500 mt-2">
        Save photos, videos, and GIFs to see them here.
      </p>
    </div>
  )}

</div>
  )
}

export default CollectionPage
