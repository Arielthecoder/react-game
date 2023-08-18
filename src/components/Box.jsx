const Box = ({ id, board, setBoard, result, setResult, boards }) => {
    const handleClick = (e) => {
        const take = e.target.firstChild.classList.contains("circle") ||
            e.target.firstChild.classList.contains("square")
        if (!take){
            if (result === "circle") {
                e.target.firstChild.classList.add("circle")
                handleBoardChange("circle")
                setResult("cross")
            }
        if (result === "cross"){
            e.target.firstChild.classList.add("cross")
            handleBoardChange("cross")
            setResult("circle")
        }

        }
    }
    const handleBoardChange = (className) => {
        const changeBoard = boards.map((board, index) => {
        if(index === id){
            return className
        }else{
            return board
        }

        })
        setBoard(changeBoard)
    }

    return (
        <div className="square" id={id} onClick={handleClick}>
            <div className={board}></div>
            </div>
        
    );
};
export default Box