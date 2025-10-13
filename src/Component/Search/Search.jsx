import useDebounce from "../../hooks/useDebounce"

function Search({ updateSeatchTerm }) {
  const debounceCallback = useDebounce((e) => updateSeatchTerm(e.target.value), 500)

  return (
    
    <div className="search-wrapper">
      <input id="pekemon-name-search"
        type="text" placeholder="Enter Search.."
        onChange={debounceCallback}
      />
    </div>
  )
}

export default Search