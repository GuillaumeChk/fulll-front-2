import { useState } from "react"

function GithubSearch() {
    const [usersList, updateUsersList] = useState([])
    const [exceedAPIRateLimit, updateExceedAPIRateLimit] = useState(false) // for edge case

    async function fetchUsers(q) {
        const response = await fetch(`https://api.github.com/search/users?q=${q}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/vnd.github.v3+json'
            },
        })
        const data = await response.json()
        updateUsersList(data.items)
        updateExceedAPIRateLimit(response.status === 403) // 403 error is for exceeding limit
    }

    return (
        <div>
            <form>
                <label>Search GitHub users</label>
                <input type="text" onChange={
                    (event) => { fetchUsers(event.target.value) }
                }>
                </input>
            </form>
            <ul>
                {   usersList &&
                    usersList.map((item) => {
                        return (
                            <li key={item.id}>
                                {item.login}
                            </li>
                        )
                    })
                }
                {   // Edge case: no results
                    (!usersList || usersList.length === 0) && !exceedAPIRateLimit && 
                    <li style={{color: 'gray'}}>
                        No results.
                    </li>    
                }
                {   // Edge case: exceding API rate limit
                    exceedAPIRateLimit &&
                    <li style={{color: 'red'}}>
                        Exceeding API rate limit (10 requests/min).
                    </li>
                }
            </ul>
        </div>
    )
}

export default GithubSearch