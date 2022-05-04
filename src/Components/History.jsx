
function History({historyList}) {
    
    return (
        <>
            <h2>History</h2>
            {historyList.map((list, indx) => <li key={indx}>{list}</li>)}
        </>
    )
}

export default History