function Tours(travs) {
    return (
        <>
            {travs.arrData.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.image} alt={item.name}></img>
                    </div>
                )
            })}

        </>
    )

}

export default Tours;