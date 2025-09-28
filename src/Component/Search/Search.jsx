


function Search({updateSeatchTerm}) {
  return (
    <div className="search-wrapper">
        <input id="pekemon-name-search" 
        type="text" placeholder="Enter Search.." 
        onChange={(e) => updateSeatchTerm(e.target.value)}
        />

    </div>
  )
}

export default Search