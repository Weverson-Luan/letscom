import React from "react";
import { useQuery } from "@tanstack/react-query";

function Todos() {
  const [page, setPage] = React.useState(0);
  const [allProjects, setAllProjects] = React.useState<any[]>([]);

  const fetchProjects = (page = 0) =>
    fetch("https://fakestoreapi.com/users?limit=5&page=" + page).then((res) =>
      res.json()
    );

  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["projects", page],
    queryFn: () => fetchProjects(page),
    staleTime: 5000, // Define por quanto tempo os dados são considerados "frescos"
  });

  React.useEffect(() => {
    if (data) {
      setAllProjects((prevProjects) => [...prevProjects, ...data]);
    }
  }, [data]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <div className="mb-4">
            <h1>Listagem de usuário</h1>
          </div>
          {allProjects.map((project: any) => (
            <div
              key={project.id}
              className="w-[400px] h-24 rounded overflow-hidden shadow-lg bg-white mb-4 pl-4 flex items-center "
            >
              <img
                className="w-8 h-8 rounded-full "
                src={
                  "https://avatars.githubusercontent.com/u/100369327?v=4&size=64"
                }
                alt={project.username}
              />
              <div className="text-left mt-4 ml-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {project.username}
                </h2>
                <p className="text-gray-600">{project.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <span> Pagina atual {page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        className={`px-4 py-2 font-semibold text-white rounded-lg shadow-md ml-2 ${
          data?.hasMore
            ? "bg-blue-500 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Next Page
      </button>
      <button
        onClick={() => {
          setPage((old) => old + 1);
        }}
        className={`px-4 py-2 font-semibold text-white rounded-lg shadow-md ml-4 ${"bg-blue-500 hover:bg-blue-700"}`}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
}

export default Todos;
