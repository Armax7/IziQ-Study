import { BsStar } from "react-icons/bs"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import * as Chakra from "@chakra-ui/react";
import { useEffect } from "react";
import { supabase } from "../../pages/api/supabaseClient";
import styles from "./Stars.module.css"



function rating({rating,deck_id,user_id="59860525-13c8-479b-889f-46c44b3ba3fa"}) {

    const onClick=(e)=>{
        const postRating = async ()=>{
            const { data, error } = await supabase
            .from('reviews')
            .insert([
              { stars: +e.currentTarget.id+1, user_id:user_id,deck_id:deck_id },
            ])
        }
        postRating()
    }

    const ratingStar = Array.from({length:5},(elem,index)=>{
        let number = index + 0.5
        return (
            <span key={index} id={index} onClick={e=>onClick(e)} >
                {
                    rating >= index + 1 ? <FaStar className={styles.icon}/> : rating >= number ? <FaStarHalfAlt className={styles.icon}/> : <BsStar className={styles.icon} />
                }
            </span>
        )
    })

  return (
    <Chakra.Flex className="content" alignSelf="center" margin="0 10px" color={"#ebb12e"}>
        {ratingStar}
    </Chakra.Flex>
  )
}

export default rating