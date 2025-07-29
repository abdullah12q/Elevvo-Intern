import { useMemo, useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";
import { DUMMYPOSTS } from "./data/Posts";
import Header from "./components/Header";

const categories = ["All", "Tech", "Travel", "Food"];
const postsPerPage = 6;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return DUMMYPOSTS.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const displayedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [filteredPosts, currentPage]);

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search posts by title..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="p-2 w-full border border-gray-300 focus:outline-gray-400 rounded"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <CustomButton
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-md font-medium text-sm ${
                    selectedCategory === category
                      ? "bg-black text-white hover:opacity-80"
                      : "border border-gray-200 hover:bg-[#f4f4f5]"
                  } cursor-pointer transition-colors duration-300 `}
                >
                  {category}
                </CustomButton>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Showing {displayedPosts.length} of {filteredPosts.length} posts
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {displayedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 w-full relative bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white text-sm text-gray-800 px-2 py-1 rounded shadow">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  <div className="flex justify-end text-sm text-gray-500">
                    {formatDate(post.date)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <h3 className="text-lg font-medium">No posts found</h3>
            <p>Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <CustomButton
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              bottomButton
            >
              Previous
            </CustomButton>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <CustomButton
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded text-sm ${
                      currentPage === page
                        ? "bg-black text-white hover:opacity-80"
                        : "border border-gray-200 hover:bg-[#f4f4f5]"
                    } cursor-pointer transition-colors duration-300`}
                  >
                    {page}
                  </CustomButton>
                )
              )}
            </div>

            <CustomButton
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              bottomButton
            >
              Next
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
