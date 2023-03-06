import Arrow from "./Arrow"
import styles from "./ArrowContainer.module.css"
function ArrowContainer({setCurrentCard,maxIndex,currentCard}) {
    const onClick = (direction) => {
        direction==="left" ? setCurrentCard(currentCard -1):setCurrentCard(currentCard +1)    
    }
    
    return (
        <div className={styles.arrowContainer}>
            <button className={styles.button} onClick={()=>onClick("left")} disabled={currentCard===0}>
                <Arrow direction="left" />
            </button>
            <h2>{currentCard+1} / {maxIndex}</h2>
            <button className={styles.button} onClick={()=>onClick("rigth")} disabled={currentCard===maxIndex-1}>
                <Arrow direction="rigth" />
            </button>
        </div>
    )
}

export default ArrowContainer