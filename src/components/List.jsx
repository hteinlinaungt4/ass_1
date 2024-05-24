
function List({data}) {
  return (
    <div className="bg-white shadow">
      <h1>{data.name}</h1>
      <h1>{data.address}</h1>
    </div>
  )
}

export default List
